/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : issue

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-09-21 09:32:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for issues
-- ----------------------------
DROP TABLE IF EXISTS `issues`;
CREATE TABLE `issues` (
  `issue_id` int(12) NOT NULL AUTO_INCREMENT,
  `project_id` int(10) NOT NULL,
  `user_id` int(12) NOT NULL,
  `issue_title` varchar(500) NOT NULL,
  `issue_statu` int(1) DEFAULT '0' COMMENT '0;open,1:close',
  `issue_content` text,
  `issue_type` int(1) DEFAULT '0' COMMENT '0:bug,1:建议',
  `issue_degree` int(1) DEFAULT '1' COMMENT '0:紧急，1：普通，2：无关紧要',
  `issue_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`issue_id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of issues
-- ----------------------------
INSERT INTO `issues` VALUES ('1', '1', '0', 'asdfsadf', '0', null, '0', '1', '2017-08-31 11:15:33');
INSERT INTO `issues` VALUES ('2', '2', '0', '阿斯蒂芬', '0', '阿斯蒂芬', '0', '1', '2017-08-31 11:19:03');
INSERT INTO `issues` VALUES ('3', '2', '0', '阿斯蒂芬', '0', '阿萨德', '0', '1', '2017-08-31 11:19:19');
INSERT INTO `issues` VALUES ('4', '2', '0', '阿斯蒂芬', '0', '阿萨德', '0', '1', '2017-08-31 11:19:27');
INSERT INTO `issues` VALUES ('5', '2', '0', '阿斯蒂芬', '0', '按时', '0', '1', '2017-08-31 11:20:26');
INSERT INTO `issues` VALUES ('6', '2', '0', '阿斯蒂芬', '0', '按时', '0', '1', '2017-08-31 11:20:54');
INSERT INTO `issues` VALUES ('7', '2', '0', '阿斯蒂芬按时', '0', '按时按时', '0', '1', '2017-08-31 11:21:03');
INSERT INTO `issues` VALUES ('9', '4', '0', '按时 ', '0', '12 阿萨德', '0', '1', '2017-08-31 11:22:38');
INSERT INTO `issues` VALUES ('10', '4', '0', '阿斯蒂芬', '0', '阿萨德', '0', '1', '2017-08-31 11:26:56');
INSERT INTO `issues` VALUES ('11', '4', '0', '阿斯蒂芬', '0', '阿萨德', '0', '1', '2017-08-31 11:27:07');
INSERT INTO `issues` VALUES ('12', '4', '0', '阿斯蒂芬', '0', '阿萨德', '0', '1', '2017-08-31 11:27:08');
INSERT INTO `issues` VALUES ('13', '4', '0', '阿斯蒂芬', '0', '阿萨德', '0', '1', '2017-08-31 11:27:09');
INSERT INTO `issues` VALUES ('14', '3', '0', 'asdf', '0', 'asd ', '0', '1', '2017-08-31 11:58:26');
INSERT INTO `issues` VALUES ('15', '3', '0', 'asdf', '0', 'asdfsadf', '0', '1', '2017-08-31 11:59:54');
INSERT INTO `issues` VALUES ('18', '11', '0', 'req.hostname', '0', '这样写不好，因为IP和域名多个的原因，最好固定死', '0', '1', '2017-09-01 09:30:55');
INSERT INTO `issues` VALUES ('19', '12', '0', '数据库的表设计有问题。要学习树形表的设计', '0', '', '0', '1', '2017-09-01 09:36:12');
INSERT INTO `issues` VALUES ('21', '12', '0', '富文本编辑器', '0', '现在的写代码不方便', '0', '1', '2017-09-01 23:04:35');
INSERT INTO `issues` VALUES ('22', '13', '0', '用数组来存字典', '0', '可以哟', '0', '1', '2017-09-05 14:30:57');

-- ----------------------------
-- Table structure for issue_items
-- ----------------------------
DROP TABLE IF EXISTS `issue_items`;
CREATE TABLE `issue_items` (
  `issue_item_id` int(12) NOT NULL AUTO_INCREMENT,
  `user_id` int(12) NOT NULL,
  `issue_id` int(12) NOT NULL,
  `issue_item_content` text,
  `issue_item_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`issue_item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of issue_items
-- ----------------------------
INSERT INTO `issue_items` VALUES ('2', '0', '1', 'asdfsadfsadf', '2017-08-31 17:08:17');
INSERT INTO `issue_items` VALUES ('3', '0', '2', 'asdfsadfsadf', '2017-08-31 17:08:35');
INSERT INTO `issue_items` VALUES ('4', '0', '18', '可以早点开始ASDASDFASDFASDFASDFASDFSADFASDFASDFASDFSADFSADFSADFASDFSDAFSADDFASDF阿士大夫撒地方打阿士大夫撒地方阿萨德sad按时\nASDFSADFASDfuckfuckfuck\n<pre>阿斯蒂芬撒的阿萨德\n    text\n</pre>\n\n\n\nASF223234234', '2017-09-01 14:59:10');
INSERT INTO `issue_items` VALUES ('6', '0', '18', 'asdfsadf\n阿斯顿发撒旦', '2017-09-01 14:37:00');
INSERT INTO `issue_items` VALUES ('9', '0', '19', '是嘛努力啊可以的', '2017-09-01 23:00:07');
INSERT INTO `issue_items` VALUES ('10', '0', '21', '确实，我会抓紧时间的。啊啊啊的', '2017-09-01 23:04:48');
INSERT INTO `issue_items` VALUES ('11', '0', '22', '袁芳你怎么看', '2017-09-05 14:31:13');
INSERT INTO `issue_items` VALUES ('12', '0', '22', '我记住了，有空一定会完成', '2017-09-05 14:31:35');

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
  `user_id` int(12) NOT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of projects
-- ----------------------------
INSERT INTO `projects` VALUES ('2', '566', '0', '0', '0', null, '0');
INSERT INTO `projects` VALUES ('3', 'test', '0', '0', '0', null, '0');
INSERT INTO `projects` VALUES ('4', 'test', '0', '0', '0', null, '0');
INSERT INTO `projects` VALUES ('6', 'test', '0', '0', '0', null, '0');
INSERT INTO `projects` VALUES ('11', '创智人生和久婵官网', '0', '0', '0', '公司网站和网站后台，使用vue+node.js', '0');
INSERT INTO `projects` VALUES ('12', 'issue管理工具', '0', '0', '0', '', '0');
INSERT INTO `projects` VALUES ('13', 'tersdt', '0', '0', '0', 'asd sad ', '0');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(12) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL,
  `user_pass` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
