CREATE DATABASE AED;

USE AED;

CREATE TABLE `location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `latitude` float(8,6) DEFAULT NULL,
  `longitude` float(9,6) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `UpdatedDate` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

 CREATE TABLE `aed_description` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `FilePath` varchar(256),
  `description` text,
  `Reference_URL` varchar(256) DEFAULT NULL,
  `CreatedDate` datetime DEFAULT CURRENT_TIMESTAMP,
  `UpdatedDate` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `ExpirationDate` datetime DEFAULT NULL,
  `LocationId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `LocationId` (`LocationId`),
  CONSTRAINT `aed_description_ibfk_1` FOREIGN KEY (`LocationId`) REFERENCES `Location` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
