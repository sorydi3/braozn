-- CreateTable
CREATE TABLE `contact` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NULL,
    `handle` VARCHAR(255) NULL,
    `message` VARCHAR(255) NULL,
    `name` VARCHAR(255) NULL,
    `telefoon` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `autoritzo` BIT(1) NOT NULL,
    `dni` VARCHAR(255) NULL,
    `name` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usertest` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `autoritzo` BIT(1) NOT NULL,
    `email` VARCHAR(255) NULL,
    `name` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
