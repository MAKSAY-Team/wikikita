CREATE TABLE roles(
    id SERIAL PRIMARY KEY NOT NULL,
    role VARCHAR NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT NULL
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    id_role INT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT NULL,
    FOREIGN KEY(id_role) REFERENCES roles(id)
);

CREATE TABLE menus(
    id SERIAL PRIMARY KEY NOT NULL,
    menu_name VARCHAR NOT NULL,
    image VARCHAR NULL,
    description TEXT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT NULL
);

CREATE TABLE submenus(
    id SERIAL PRIMARY KEY NOT NULL,
    id_user INT NOT NULL,
    id_menu INT NOT NULL,
    submenu_name VARCHAR NOT NULL,
    description TEXT NULL,
    image VARCHAR NULL,
    modified_by TIMESTAMP NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT NULL,
    FOREIGN KEY(id_user) REFERENCES users(id),
    FOREIGN KEY(id_menu) REFERENCES menus(id)
);