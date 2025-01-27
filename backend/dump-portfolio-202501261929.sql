-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: portfolio
-- ------------------------------------------------------
-- Server version	11.0.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `projects_sample`
--

DROP TABLE IF EXISTS `projects_sample`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects_sample` (
  `id` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `image` varchar(256) DEFAULT NULL,
  `price_per_ton` int(11) DEFAULT NULL,
  `offered_volume_in_tons` int(11) DEFAULT NULL,
  `distribution_weight` double DEFAULT NULL,
  `supplier_name` varchar(50) DEFAULT NULL,
  `earliest_delivery` varchar(50) DEFAULT NULL,
  `description` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects_sample`
--

LOCK TABLES `projects_sample` WRITE;
/*!40000 ALTER TABLE `projects_sample` DISABLE KEYS */;
INSERT INTO `projects_sample` VALUES (1,'EverGreen CarbonScape','Germany','https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Fugitives/38bb530f5caf513be9f2a41f2d909f47-min.jpeg',650,15,0.05,'Klom','2023-09-01','The \"EverGreen CarbonScape\" project is dedicated to combatting climate change by restoring and preserving vital forest ecosystems.\nThrough reforestation, afforestation, and sustainable forest management, we aim to create robust carbon sinks while promoting biodiversity, engaging local communities, and preventing deforestation.'),(2,'VerdeCarbon','India','https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Mineralisation/ben-karpinski-ctWw2S9VqOI-unsplash-min.jpg',200,900,0.1,'Klom','2022-04-01','A transformative carbon credit project dedicated to revitalizing ecosystems and fighting climate change.\nBy strategically planting native trees and adopting sustainable forest practices, we\'re creating a potent solution that not only absorbs carbon dioxide but also nurtures biodiversity and empowers local communities.\nThrough verified carbon credits, VerdeCarbon is a beacon of environmental stewardship and positive impact.'),(3,'SustainaForest Carbon','Brazil','https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Afforestation+reforestation/marita-kavelashvili-ugnrXk1129g-unsplash-min.jpg',50,1500,0.15,'EcoCarbon','2024-01-01','The \"SustainaForest Carbon\" project tackles climate change by restoring and protecting vital forest ecosystems.\nThrough reforestation, sustainable management, and community engagement, we\'re creating resilient carbon sinks that benefit the environment, biodiversity, and local communities.\nVerified carbon credits will be generated as we capture CO2, fostering a sustainable future for all.'),(4,'EcoRespire','India','https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Climate+fund/climate-fund.png',25,1100,0.25,'Pure Planet','2023-05-15','A project dedicated to revitalizing our planet by rejuvenating and conserving critical forest ecosystems.\nBy planting native trees, practicing sustainable forest management, and engaging with local communities, EcoRespire aims to capture carbon dioxide, promote biodiversity, and empower communities.\nVerified carbon credits will be generated, offering a sustainable solution to combat climate change while fostering environmental and societal well-being.'),(5,'EverGreen Carbon','Egipt','https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Renewable+energy/andreas-gucklhorn-Ilpf2eUPpUE-unsplash-min.jpg',10,16000,0.45,'Carbon Solutions','2023-12-01','The \"EverGreen Carbon\" project is a transformative carbon credit initiative aimed at restoring and maintaining vital forest ecosystems.\nThrough reforestation, afforestation, and sustainable forest management, we will sequester significant carbon dioxide, enhance biodiversity, empower local communities, and combat deforestation. Verified carbon credits will be generated, reflecting the project\'s positive impact on the environment. Join us in creating a sustainable and greener future with EverGreen Carbon.');
/*!40000 ALTER TABLE `projects_sample` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'portfolio'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-26 19:29:10
