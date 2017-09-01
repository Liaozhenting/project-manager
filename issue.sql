/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : issue

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-09-01 17:42:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for issues
-- ----------------------------
DROP TABLE IF EXISTS `issues`;
CREATE TABLE `issues` (
  `issue_id` int(12) NOT NULL AUTO_INCREMENT,
  `project_id` int(10) NOT NULL,
  `issue_title` varchar(500) NOT NULL,
  `issue_statu` int(1) DEFAULT '0' COMMENT '0;open,1:close',
  `issue_cotent` text,
  `issue_type` int(1) DEFAULT '0' COMMENT '0:bug,1:建议',
  `issue_degree` int(1) DEFAULT '1' COMMENT '0:紧急，1：普通，2：无关紧要',
  `issue_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`issue_id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of issues
-- ----------------------------
INSERT INTO `issues` VALUES ('1', '1', 'asdfsadf', '0', null, '0', '1', '2017-08-31 11:15:33');
INSERT INTO `issues` VALUES ('2', '2', '阿斯蒂芬', '0', '阿斯蒂芬', '0', '1', '2017-08-31 11:19:03');
INSERT INTO `issues` VALUES ('3', '2', '阿斯蒂芬', '0', '阿萨德', '0', '1', '2017-08-31 11:19:19');
INSERT INTO `issues` VALUES ('4', '2', '阿斯蒂芬', '0', '阿萨德', '0', '1', '2017-08-31 11:19:27');
INSERT INTO `issues` VALUES ('5', '2', '阿斯蒂芬', '0', '按时', '0', '1', '2017-08-31 11:20:26');
INSERT INTO `issues` VALUES ('6', '2', '阿斯蒂芬', '0', '按时', '0', '1', '2017-08-31 11:20:54');
INSERT INTO `issues` VALUES ('7', '2', '阿斯蒂芬按时', '0', '按时按时', '0', '1', '2017-08-31 11:21:03');
INSERT INTO `issues` VALUES ('9', '4', '按时 ', '0', '12 阿萨德', '0', '1', '2017-08-31 11:22:38');
INSERT INTO `issues` VALUES ('10', '4', '阿斯蒂芬', '0', '阿萨德', '0', '1', '2017-08-31 11:26:56');
INSERT INTO `issues` VALUES ('11', '4', '阿斯蒂芬', '0', '阿萨德', '0', '1', '2017-08-31 11:27:07');
INSERT INTO `issues` VALUES ('12', '4', '阿斯蒂芬', '0', '阿萨德', '0', '1', '2017-08-31 11:27:08');
INSERT INTO `issues` VALUES ('13', '4', '阿斯蒂芬', '0', '阿萨德', '0', '1', '2017-08-31 11:27:09');
INSERT INTO `issues` VALUES ('14', '3', 'asdf', '0', 'asd ', '0', '1', '2017-08-31 11:58:26');
INSERT INTO `issues` VALUES ('15', '3', 'asdf', '0', 'asdfsadf', '0', '1', '2017-08-31 11:59:54');
INSERT INTO `issues` VALUES ('18', '11', 'req.hostname', '0', '这样写不好，因为IP和域名多个的原因，最好固定死', '0', '1', '2017-09-01 09:30:55');
INSERT INTO `issues` VALUES ('19', '12', '数据库的表设计有问题。要学习树形表的设计', '0', '', '0', '1', '2017-09-01 09:36:12');

-- ----------------------------
-- Table structure for issue_items
-- ----------------------------
DROP TABLE IF EXISTS `issue_items`;
CREATE TABLE `issue_items` (
  `issue_item_id` int(12) NOT NULL AUTO_INCREMENT,
  `issue_id` int(12) NOT NULL,
  `issue_item_content` text,
  `issue_item_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`issue_item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of issue_items
-- ----------------------------
INSERT INTO `issue_items` VALUES ('2', '1', 'asdfsadfsadf', '2017-08-31 17:08:17');
INSERT INTO `issue_items` VALUES ('3', '2', 'asdfsadfsadf', '2017-08-31 17:08:35');
INSERT INTO `issue_items` VALUES ('4', '18', '可以早点开始ASDASDFASDFASDFASDFASDFSADFASDFASDFASDFSADFSADFSADFASDFSDAFSADDFASDF\nASDFSADFASDfuckfuckfuck\n<pre>阿斯蒂芬撒的阿萨德\n    text\n</pre>\n\n\n\nASF223234234', '2017-09-01 14:59:10');
INSERT INTO `issue_items` VALUES ('6', '18', 'asdfsadf\n阿斯顿发撒旦', '2017-09-01 14:37:00');

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
  `project_description` text,
  PRIMARY KEY (`project_id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of projects
-- ----------------------------
INSERT INTO `projects` VALUES ('2', '566', '0', '0', '0', null);
INSERT INTO `projects` VALUES ('3', 'test', '0', '0', '0', null);
INSERT INTO `projects` VALUES ('4', 'test', '0', '0', '0', null);
INSERT INTO `projects` VALUES ('6', 'test', '0', '0', '0', null);
INSERT INTO `projects` VALUES ('11', '创智人生和久婵官网', '0', '0', '0', '公司网站和网站后台，使用vue+node.js');
INSERT INTO `projects` VALUES ('12', 'issue管理工具', '0', '0', '0', '');
