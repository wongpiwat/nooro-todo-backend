-- CreateTable
CREATE TABLE `Task` (
    `id` VARCHAR(255) NOT NULL,
    `title` TEXT NOT NULL,
    `color` TEXT NOT NULL,
    `status` BOOLEAN NOT NULL,
    `timestamps` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
