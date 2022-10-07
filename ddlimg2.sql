-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: db_songs_photos
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `songs`
--

DROP TABLE IF EXISTS `songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `songs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `duration` time NOT NULL,
  `authors` varchar(45) NOT NULL,
  `album` varchar(45) DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `songs`
--

LOCK TABLES `songs` WRITE;
/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
INSERT INTO `songs` VALUES (3,'Tú Eres Otra Cosa','03:33:00','Ñengo Flow','RealG4Life',NULL,NULL,NULL),(4,'Sinfónico Con Yampi','04:01:00','Ñengo Flow','RealG4Life',NULL,NULL,NULL),(5,'Hola','04:05:00','x',NULL,NULL,NULL,NULL),(6,'En Las Noches Frías','04:15:00','Ñengo Flow','RealG4Life',NULL,NULL,NULL),(7,'Torturao Y To\' Jodío','04:29:00','Ñengo Flow','RealG4Life',NULL,NULL,NULL),(8,'Jaja','03:24:00','Ñengo Flow','RealG4Life',NULL,NULL,NULL),(9,'Gansta Shit','03:44:00','Ñengo Flow','RealG4Life',NULL,NULL,NULL),(10,'Déjala Que Vuele','03:03:00','Ñengo Flow','RealG4Life',NULL,NULL,NULL),(11,'Soy El Que Mata','03:20:00','Ñengo Flow','RealG4Life',NULL,NULL,NULL),(12,'Me Pide Que Le Dé','04:32:00','Ñengo Flow','RealG4Life',NULL,NULL,NULL),(13,'Jala Pa\' Su Lao','03:20:00','Ñengo Flow','RealG4Life',NULL,NULL,NULL),(14,'Sin Perse Ninguna','03:16:00','Ñengo Flow','RealG4Life',NULL,NULL,NULL),(15,'Perdiste','03:18:00','Ñengo Flow','RealG4Life',NULL,NULL,NULL),(18,'Bellaco con bellaca','04:04:00','Ñengo Flow, Jowell y Randy','',NULL,NULL,NULL),(19,'aaa','01:01:00','q','',NULL,NULL,NULL),(20,'holamundo','02:10:00','si',NULL,NULL,NULL,NULL),(21,'otra cancion','10:00:00','a','',NULL,NULL,NULL),(22,'Neverita','100:00:00','Bad Bunny','Un verano sin ti',NULL,NULL,NULL),(23,'Suavemente','04:00:00','Elvis Crespo',NULL,NULL,'2022-10-07 16:38:19','2022-10-07 16:38:19'),(24,'Hasbi','01:00:00','Rusia','URSS',NULL,'2022-10-07 17:45:01','2022-10-07 17:45:01'),(25,'Hasbulla','02:00:00','Putin','Madre Rusia',NULL,'2022-10-07 17:55:56','2022-10-07 17:55:56'),(26,'Suavemente','04:00:00','Elvis Crespo',NULL,NULL,'2022-10-07 18:03:20','2022-10-07 18:03:20'),(27,'Si','04:00:00','Elvis Crespo',NULL,NULL,'2022-10-07 18:08:09','2022-10-07 18:08:09'),(28,'No','04:00:00','Elvis Crespo',NULL,'image-1665166233751.jpg','2022-10-07 18:10:33','2022-10-07 18:10:33'),(29,'Broly','01:30:00','Akira Toriyama','-','image-1665166479204.png','2022-10-07 18:14:39','2022-10-07 18:14:39'),(30,'SSJ legendario','02:03:00','Trolliyama','null','image-1665166870440.png','2022-10-07 18:21:10','2022-10-07 18:21:10'),(31,'a','00:00:01','1','null','','2022-10-07 18:22:41','2022-10-07 18:22:41'),(32,'2','00:00:02','2','null','','2022-10-07 19:00:48','2022-10-07 19:00:48'),(33,'3','00:00:03','3','','','2022-10-07 19:03:07','2022-10-07 19:03:07'),(34,'4','00:00:04','4','','','2022-10-07 19:04:32','2022-10-07 19:04:32'),(35,'5','00:00:05','5',NULL,'','2022-10-07 19:06:00','2022-10-07 19:06:00'),(36,'6','00:00:06','6','null','','2022-10-07 19:06:45','2022-10-07 19:06:45'),(37,'7','00:00:07','7',NULL,'','2022-10-07 19:07:18','2022-10-07 19:07:18'),(38,'8','00:00:08','8','null','','2022-10-07 19:10:22','2022-10-07 19:10:22'),(39,'8','00:00:08','8','null','','2022-10-07 19:20:04','2022-10-07 19:20:04'),(40,'9','00:00:09','9','null','','2022-10-07 19:24:12','2022-10-07 19:24:12'),(41,'0','00:00:00','0','null','','2022-10-07 19:34:42','2022-10-07 19:34:42');
/*!40000 ALTER TABLE `songs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-07 20:47:11
