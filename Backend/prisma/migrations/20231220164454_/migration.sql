-- CreateTable
CREATE TABLE `tbl_tipo_usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` ENUM('ADMINISTRADOR', 'USUARIO') NOT NULL DEFAULT 'USUARIO',

    UNIQUE INDEX `tbl_tipo_usuario_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_pessoa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `senha` TEXT NOT NULL,
    `data_nascimento` DATE NOT NULL,
    `profissao` VARCHAR(100) NOT NULL,
    `foto` TEXT NOT NULL,
    `id_tipo_usuario` INTEGER NOT NULL,

    UNIQUE INDEX `tbl_pessoa_email_key`(`email`),
    UNIQUE INDEX `tbl_pessoa_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_contato` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `numero_celular` VARCHAR(15) NOT NULL,
    `possui_whatsapp` BOOLEAN NOT NULL,
    `id_pessoa` INTEGER NOT NULL,

    UNIQUE INDEX `tbl_contato_numero_celular_key`(`numero_celular`),
    UNIQUE INDEX `tbl_contato_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbl_notificacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `enviar_notificacao_sms` BOOLEAN NOT NULL,
    `enviar_notificacao_whatsapp` BOOLEAN NOT NULL,
    `id_contato` INTEGER NOT NULL,

    UNIQUE INDEX `tbl_notificacao_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tbl_pessoa` ADD CONSTRAINT `tbl_pessoa_id_tipo_usuario_fkey` FOREIGN KEY (`id_tipo_usuario`) REFERENCES `tbl_tipo_usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_contato` ADD CONSTRAINT `tbl_contato_id_pessoa_fkey` FOREIGN KEY (`id_pessoa`) REFERENCES `tbl_pessoa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbl_notificacao` ADD CONSTRAINT `tbl_notificacao_id_contato_fkey` FOREIGN KEY (`id_contato`) REFERENCES `tbl_contato`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
