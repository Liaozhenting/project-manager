/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : issue

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-08-30 07:27:34
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for issue
-- ----------------------------
DROP TABLE IF EXISTS `issue`;
CREATE TABLE `issue` (
  `issue_id` int(12) NOT NULL AUTO_INCREMENT,
  `project_id` int(10) DEFAULT NULL,
  `issue_statu` int(1) DEFAULT NULL,
  `issue_cotent` text,
  `issue_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `issue_type` int(1) DEFAULT NULL COMMENT '0:bug,1:建议',
  `issue_degree` int(1) DEFAULT NULL,
  PRIMARY KEY (`issue_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of issue
-- ----------------------------

-- ----------------------------
-- Table structure for project
-- ----------------------------
DROP TABLE IF EXISTS `project`;
CREATE TABLE `project` (
  `project_id` int(10) NOT NULL AUTO_INCREMENT,
  `project_name` varchar(255) DEFAULT '',
  `project_issue_sum` int(10) DEFAULT NULL,
  `project_issue_close` int(10) DEFAULT NULL,
  `project_issue_open` int(10) DEFAULT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of project
-- ----------------------------
