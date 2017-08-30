/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : issue

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-08-30 17:38:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for issues
-- ----------------------------
DROP TABLE IF EXISTS `issues`;
CREATE TABLE `issues` (
  `issue_id` int(12) NOT NULL AUTO_INCREMENT,
  `project_id` int(10) DEFAULT NULL,
  `issue_statu` int(1) DEFAULT '0' COMMENT 'open还是close',
  `issue_cotent` text,
  `issue_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `issue_type` int(1) DEFAULT '0' COMMENT '0:bug,1:建议',
  `issue_degree` int(1) DEFAULT '2' COMMENT '0:紧急，1：普通，2：无关紧要',
  PRIMARY KEY (`issue_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of issues
-- ----------------------------

-- ----------------------------
-- Table structure for projects
-- ----------------------------
DROP TABLE IF EXISTS `projects`;
CREATE TABLE `projects` (
  `project_id` int(10) NOT NULL AUTO_INCREMENT,
  `project_name` varchar(255) DEFAULT '',
  `project_issue_sum` int(10) DEFAULT '0',
  `project_issue_close` int(10) DEFAULT '0',
  `project_issue_open` int(10) DEFAULT '0',
  PRIMARY KEY (`project_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of projects
-- ----------------------------
INSERT INTO `projects` VALUES ('2', '566', '0', '0', '0');
INSERT INTO `projects` VALUES ('3', 'test', '0', '0', '0');
INSERT INTO `projects` VALUES ('4', 'test', '0', '0', '0');
INSERT INTO `projects` VALUES ('5', 'test', '0', '0', '0');
INSERT INTO `projects` VALUES ('6', 'test', '0', '0', '0');
INSERT INTO `projects` VALUES ('7', 'asdf', '0', '0', '0');
INSERT INTO `projects` VALUES ('8', 'test', '0', '0', '0');
