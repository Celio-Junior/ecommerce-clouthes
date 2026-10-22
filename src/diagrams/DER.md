# DER — Northline E-commerce de Roupas (MySQL)

Diagrama Entidade-Relacionamento completo, cobrindo o **lado cliente** (loja) e o **lado admin** (gestão).

```mermaid
erDiagram
    %% ===== CLIENTES =====
    users ||--o{ addresses : "possui"
    users ||--o{ carts : "possui"
    users ||--o{ orders : "realiza"
    users ||--o| admins : "pode ser"

    users {
        int id PK
        varchar(150) name
        varchar(150) email UQ
        varchar(255) password_hash
        varchar(20) phone
        varchar(10) role "client | admin"
        boolean is_active
        datetime created_at
        datetime updated_at
    }

    addresses {
        int id PK
        int user_id FK
        varchar(150) street
        varchar(10) number
        varchar(100) complement
        varchar(100) neighborhood
        varchar(100) city
        char(2) state
        varchar(9) zip_code
        varchar(60) country
        boolean is_default
    }

    %% ===== CATÁLOGO =====
    categories }o--o{ categories : "parent_id"
    categories ||--o{ products : "agrupa"
    brands ||--o{ products : "detém"
    products ||--o{ product_images : "possui"
    products ||--o{ product_variations : "possui"

    categories {
        int id PK
        int parent_id FK "auto-relação, null = raiz"
        varchar(100) name
        varchar(120) slug UQ
        varchar(255) image_url
        int position
        boolean is_active
    }

    brands {
        int id PK
        varchar(100) name
        varchar(120) slug UQ
        varchar(255) logo_url
        boolean is_active
    }

    products {
        int id PK
        int category_id FK
        int brand_id FK
        varchar(150) name
        varchar(170) slug UQ
        text description
        decimal(10_2) base_price
        decimal(10_2) promo_price "null = sem promoção"
        boolean is_active
        datetime created_at
        datetime updated_at
    }

    product_images {
        int id PK
        int product_id FK
        varchar(255) url
        varchar(150) alt
        int position
    }

    product_variations {
        int id PK
        int product_id FK
        varchar(5) size "PP P M G GG XG"
        varchar(50) color
        varchar(50) sku UQ
        decimal(10_2) price_override "null = usa base_price"
        int stock_quantity
        boolean is_active
    }

    %% ===== CARRINHO =====
    carts ||--o{ cart_items : "contém"
    product_variations ||--o{ cart_items : "referencia"

    carts {
        int id PK
        int user_id FK "null = guest"
        varchar(64) session_token "guest"
        datetime created_at
        datetime updated_at
    }

    cart_items {
        int id PK
        int cart_id FK
        int product_variation_id FK
        int quantity
        datetime created_at
    }

    %% ===== PEDIDOS =====
    users ||--o{ orders : "compra"
    addresses ||--o{ orders : "entrega"
    coupons |o--o{ orders : "aplica"
    orders ||--o{ order_items : "contém"
    orders ||--o| payments : "gera"
    orders ||--o| shipments : "gera"
    product_variations ||--o{ order_items : "referencia"

    orders {
        int id PK
        int user_id FK
        int address_id FK "endereço de entrega"
        int coupon_id FK "null = sem cupom"
        varchar(20) status "pending paid shipped delivered cancelled"
        decimal(10_2) subtotal
        decimal(10_2) discount
        decimal(10_2) shipping_cost
        decimal(10_2) total
        datetime created_at
        datetime updated_at
    }

    order_items {
        int id PK
        int order_id FK
        int product_variation_id FK
        varchar(150) product_name "snapshot"
        varchar(5) size "snapshot"
        varchar(50) color "snapshot"
        int quantity
        decimal(10_2) unit_price "snapshot"
    }

    payments {
        int id PK
        int order_id FK
        varchar(15) method "pix credit_card boleto"
        varchar(20) status "pending approved refused refunded"
        varchar(50) gateway
        varchar(100) transaction_id
        datetime paid_at
        datetime created_at
    }

    shipments {
        int id PK
        int order_id FK
        varchar(80) carrier
        varchar(100) tracking_code
        varchar(20) status "processing shipped in_transit delivered lost"
        datetime shipped_at
        datetime delivered_at
        datetime created_at
    }

    coupons {
        int id PK
        varchar(50) code UQ
        varchar(10) discount_type "percent fixed"
        decimal(10_2) value
        decimal(10_2) min_order
        int max_uses
        int used_count
        datetime starts_at
        datetime ends_at
        boolean is_active
    }

    %% ===== ADMIN / GESTÃO =====
    admins }o--|| admin_roles : "assume"
    admin_roles ||--o{ admin_permissions : "concede"
    admins ||--o{ stock_movements : "registra"
    admins ||--o{ audit_logs : "gera"
    product_variations ||--o{ stock_movements : "afeta"

    admins {
        int id PK
        int user_id UQ "FK users"
        int role_id FK
        int created_by "FK users, quem criou"
        datetime created_at
    }

    admin_roles {
        int id PK
        varchar(50) name UQ "owner manager support stock"
    }

    admin_permissions {
        int id PK
        int role_id FK
        varchar(50) permission "ex: orders:manage"
    }

    stock_movements {
        int id PK
        int product_variation_id FK
        int order_id FK "null se não veio de pedido"
        int admin_id FK "null = automático"
        int change "+N ou -N"
        varchar(25) reason "purchase restock return cancelled_order manual"
        datetime created_at
    }

    audit_logs {
        int id PK
        int admin_id FK
        varchar(100) action
        varchar(50) entity
        int entity_id
        json details
        datetime created_at
    }
```

## Visão por módulo

### 👤 Cliente (loja)
| Tabela | Responsabilidade |
|---|---|
| `users` | Cadastro/login. `role` distingue cliente de admin na mesma tabela |
| `addresses` | Vários endereços por usuário; `is_default` marca o padrão |
| `categories` | Hierárquica via `parent_id` (ex.: Masculino → Camisetas) |
| `brands` | Marca do produto |
| `products` | Ficha do produto; `promo_price` opcional |
| `product_images` | Galeria ordenada por `position` |
| `product_variations` | O coração da roupa: **tamanho + cor + SKU**, estoque e preço opcional por variação |
| `carts` / `cart_items` | Carrinho persistido; guest usa `session_token` e migra para o `user` no login |
| `orders` / `order_items` | Pedido com **snapshot** do produto (nome, tamanho, cor, preço) — histórico imutável |
| `payments` | 1:1 com o pedido; rastreia gateway e status |
| `shipments` | Rastreio e status da entrega |
| `coupons` | Percentual ou fixo, com validade e teto de uso |

### 🛠️ Admin (gestão)
| Tabela | Responsabilidade |
|---|---|
| `admins` | Extensão 1:0..1 do `user` — só entra aqui quem tem poder de gestão |
| `admin_roles` | Papéis: `owner`, `manager`, `support`, `stock` |
| `admin_permissions` | Permissões granulares por role (`products:write`, `orders:manage`, `coupons:manage`, `reports:view`...) |
| `stock_movements` | Toda entrada/saída de estoque com motivo e autor |
| `audit_logs` | Quem fez o quê, em qual entidade, com detalhes em JSON |

## Regras de negócio

1. **Snapshot em pedidos**: `order_items` copia nome/tamanho/cor/preço — mudanças futuras no produto não alteram pedidos antigos.
2. **Estoque**: `stock_quantity` fica em `product_variations` (leitura rápida); `stock_movements` é a trilha de auditoria (toda mudança deve gerar um registro).
3. **Cupom**: FK opcional em `orders`; o desconto já é materializado em `discount` e `total` no momento da compra.
4. **Preço final da variação**: `price_override` se existir, senão `products.base_price` (ou `promo_price` ativa).
5. **Perfis**: todo admin é um `user` com `role='admin'` **e** registro em `admins` com um `role_id` → permissões.

## Ajustes MySQL sugeridos no CREATE TABLE
- `utf8mb4_0900_ai_ci` (aceita emoji e acentos) e `InnoDB`
- `DECIMAL(10,2)` para dinheiro — nunca `FLOAT`
- Índices: `users.email`, `products.slug`, `product_variations.sku`, `coupons.code`, `orders.user_id`, `stock_movements(product_variation_id, created_at)`
- `ON DELETE`: `RESTRICT` em pagamentos/pedidos; `CASCADE` em imagens e itens de carrinho
