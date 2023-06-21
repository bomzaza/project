-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 21, 2023 at 06:34 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lovelyhill_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id_admin` int(5) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id_admin`, `username`, `password`) VALUES
(1, 'admin', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `reserve`
--

CREATE TABLE `reserve` (
  `id_reserve` int(5) NOT NULL,
  `id_user` int(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phon` varchar(10) NOT NULL,
  `day_start` date NOT NULL,
  `day_end` date NOT NULL,
  `id_name_reserve` int(5) NOT NULL,
  `status_room` int(1) NOT NULL,
  `id_room` int(5) NOT NULL,
  `create_date` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reserve`
--

INSERT INTO `reserve` (`id_reserve`, `id_user`, `name`, `phon`, `day_start`, `day_end`, `id_name_reserve`, `status_room`, `id_room`, `create_date`) VALUES
(20, 20, 'แมว', '7879789789', '2023-03-18', '2023-03-19', 1, 1, 24, '2023-04-29 00:05:54'),
(23, 0, 'bbbb', '7879789789', '2023-04-05', '2023-04-06', 2, 1, 24, '2023-04-05 11:40:09'),
(24, 20, 'อั้ม', '0998754325', '2023-04-05', '2023-04-06', 2, 1, 29, '2023-04-29 00:06:01'),
(25, 0, 'fsdfsdfsdf', '0000000000', '2023-04-28', '2023-04-29', 2, 1, 25, '2023-04-28 22:32:12'),
(26, 0, 'bom', '5555555555', '2023-04-28', '2023-04-29', 2, 1, 24, '2023-04-28 22:37:59'),
(27, 18, 'banlang', '5555555555', '2023-05-01', '2023-05-02', 2, 1, 2, '2023-05-01 18:46:36'),
(28, 18, 'banlang', '0993278421', '2023-05-01', '2023-05-02', 1, 1, 1, '2023-05-01 18:47:29'),
(38, 23, 'kk9', '0000000000', '2023-05-22', '2023-05-23', 1, 1, 24, '2023-05-01 23:14:45'),
(47, 18, 'banlang', '7777777777', '2023-05-23', '2023-05-24', 0, 1, 24, '2023-05-23 19:42:43'),
(48, 0, 'bom', '0993278421', '2023-05-30', '2023-05-31', 2, 1, 36, '2023-05-28 05:14:59'),
(49, 0, 'bom', '0993278421', '2023-06-01', '2023-06-02', 2, 1, 36, '2023-05-28 05:19:18'),
(50, 0, 'bom', '0993278421', '2023-05-01', '2023-05-02', 2, 1, 36, '2023-05-28 05:27:01'),
(51, 0, 'bom', '0993278421', '2023-05-10', '2023-05-11', 2, 1, 36, '2023-05-28 05:30:50');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `id_room` int(5) NOT NULL,
  `name_room` text NOT NULL,
  `detail_room` text NOT NULL,
  `price_room` int(4) NOT NULL,
  `img1` text NOT NULL,
  `img2` text NOT NULL,
  `img3` text NOT NULL,
  `img4` text NOT NULL,
  `img5` text NOT NULL,
  `id_room_type` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`id_room`, `name_room`, `detail_room`, `price_room`, `img1`, `img2`, `img3`, `img4`, `img5`, `id_room_type`) VALUES
(37, 'B123', 'อาหารเช้า ตู้เย็น โทรศัพ', 1, '/uploads/B123_1.jpg', '/uploads/B123_2.jpg', '/uploads/B123_3.jpg', '/uploads/B123_4.jpg', '/uploads/B123_5.jpg', 1),
(38, 'A501', 'อาหารเช้า ตู้เย็น โทรศัพ', 2, '/uploads/A501_1.jpg', '/uploads/A501_2.jpg', '/uploads/A501_3.jpg', '/uploads/A501_4.jpg', '/uploads/A501_5.jpg', 1),
(42, 'B123', 'อาหารเช้า ตู้เย็น โทรศัพ', 5, '/uploads/B123_825153897.jpg', '/uploads/B123_375894508.jpg', '/uploads/B123_844307115.jpg', '/uploads/B123_552139903.jpg', '/uploads/B123_726807467.jpg', 1),
(45, 'B123', 'อาหารเช้า ตู้เย็น โทรศัพ', 1, '/uploads/B123_1_993042717.jpg', '/uploads/B123_2_156273754.jpg', '/uploads/B123_3_426033465.jpg', '/uploads/B123_4_452601816.jpg', '/uploads/B123_5_612348736.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `room_type`
--

CREATE TABLE `room_type` (
  `id_room_type` int(5) NOT NULL,
  `room_name_type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `room_type`
--

INSERT INTO `room_type` (`id_room_type`, `room_name_type`) VALUES
(1, 'โดม'),
(2, 'กระโจม'),
(3, 'บ้านพัก'),
(4, 'เต้น');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(5) NOT NULL,
  `name_user` varchar(50) NOT NULL,
  `phon_number` text NOT NULL,
  `email_user` varchar(255) NOT NULL,
  `password_user` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `name_user`, `phon_number`, `email_user`, `password_user`) VALUES
(18, 'banlang', '0888888888', 'bombanlang2539@gmail.com', '5'),
(19, 'banlang', '0888888888', 'bombanlang2892@gmail.com', '5'),
(20, 'นคร', '0888888888', 'nems.kk9@gmail.com', '1234'),
(21, 'หำ', '0878787878', 'bom123@gmail.com', '55555'),
(22, 'แมน', '0888888888', 'man@gmail.com', '1'),
(23, 'kk9', '0878787878', 'kk9@gmail.com', '7'),
(24, 'aa', '0888888888', 'bombanlaaang2539@gmail.com', 'a');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `reserve`
--
ALTER TABLE `reserve`
  ADD PRIMARY KEY (`id_reserve`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id_room`);

--
-- Indexes for table `room_type`
--
ALTER TABLE `room_type`
  ADD PRIMARY KEY (`id_room_type`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id_admin` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `reserve`
--
ALTER TABLE `reserve`
  MODIFY `id_reserve` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `id_room` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `room_type`
--
ALTER TABLE `room_type`
  MODIFY `id_room_type` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
