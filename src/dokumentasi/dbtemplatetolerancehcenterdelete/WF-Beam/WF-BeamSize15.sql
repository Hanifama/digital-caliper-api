-- Template wf-beam WF 350X175X7X11
INSERT INTO `qc_template` (`qc_template_id`, `prodtype_id`, `size_id`, `profile`, `std_dimention`, `brand_merek`, `specification`, `name`, `status`, `created_by`, `created_dt`, `updated_by`, `updated_dt`) VALUES
('TMP-wfoeecfg','WF-BEAM','WF 350X175X7X11','WF 350X175X7X11','350X175X7X11','WF-BEAM 350X175X7X11','WF 350X175X7X11','Template WF-BEAM 350X175X7X11','active','Akun Testing Manajer','2025-11-08 13:00:00','Akun Testing Manajer','2025-11-08 13:00:00');

INSERT INTO `qc_template_data` (`input_code`, `qc_template_id`, `label`, `input_type`, `min_tolerance`, `t_lt_50_tolerance`, `nominal_tolerance`, `t_gt_50_tolerance`, `max_tolerance`, `actual_tolerance`, `order_numb`, `enabled`, `sound`, `position`, `group_name`) VALUES
-- H-Top (1-3)
('H.H-top','TMP-wfoeecfg','H(H-top)','number',348,349,350,351,352,NULL,1,1,'','H-Top','table'),
('C.H-top','TMP-wfoeecfg','C(H-top)','number',348,349,350,351,352,NULL,2,1,'','H-Top','table'),
('T.H-top','TMP-wfoeecfg','T(H-top)','number',348,349,350,351,352,NULL,3,1,'','H-Top','table'),

-- H-Bottom (4-6)
('H.H-bottom','TMP-wfoeecfg','H(H-bottom)','number',348,349,350,351,352,NULL,4,1,'','H-Bottom','table'),
('C.H-bottom','TMP-wfoeecfg','C(H-bottom)','number',348,349,350,351,352,NULL,5,1,'','H-Bottom','table'),
('T.H-bottom','TMP-wfoeecfg','T(H-bottom)','number',348,349,350,351,352,NULL,6,1,'','H-Bottom','table'),

-- B1 (7-9)
('H.B1','TMP-wfoeecfg','H(B1)','number',172.5,173.75,175,176.25,177.5,NULL,7,1,'','B1','table'),
('C.B1','TMP-wfoeecfg','C(B1)','number',172.5,173.75,175,176.25,177.5,NULL,8,1,'','B1','table'),
('T.B1','TMP-wfoeecfg','T(B1)','number',172.5,173.75,175,176.25,177.5,NULL,9,1,'','B1','table'),

-- B2 (10-12)
('H.B2','TMP-wfoeecfg','H(B2)','number',172.5,173.75,175,176.25,177.5,NULL,10,1,'','B2','table'),
('C.B2','TMP-wfoeecfg','C(B2)','number',172.5,173.75,175,176.25,177.5,NULL,11,1,'','B2','table'),
('T.B2','TMP-wfoeecfg','T(B2)','number',172.5,173.75,175,176.25,177.5,NULL,12,1,'','B2','table'),

-- b1 (13-15)
('H.b1','TMP-wfoeecfg','H(b1)','number',10,10.5,11,11.5,12,NULL,13,1,'','b1','table'),
('C.b1','TMP-wfoeecfg','C(b1)','number',10,10.5,11,11.5,12,NULL,14,1,'','b1','table'),
('T.b1','TMP-wfoeecfg','T(b1)','number',10,10.5,11,11.5,12,NULL,15,1,'','b1','table'),

-- b3 (16-18)
('H.b3','TMP-wfoeecfg','H(b3)','number',10,10.5,11,11.5,12,NULL,16,1,'','b3','table'),
('C.b3','TMP-wfoeecfg','C(b3)','number',10,10.5,11,11.5,12,NULL,17,1,'','b3','table'),
('T.b3','TMP-wfoeecfg','T(b3)','number',10,10.5,11,11.5,12,NULL,18,1,'','b3','table'),

-- b2 (19-21)
('H.b2','TMP-wfoeecfg','H(b2)','number',10,10.5,11,11.5,12,NULL,19,1,'','b2','table'),
('C.b2','TMP-wfoeecfg','C(b2)','number',10,10.5,11,11.5,12,NULL,20,1,'','b2','table'),
('T.b2','TMP-wfoeecfg','T(b2)','number',10,10.5,11,11.5,12,NULL,21,1,'','b2','table'),

-- b4 (22-24)
('H.b4','TMP-wfoeecfg','H(b4)','number',10,10.5,11,11.5,12,NULL,22,1,'','b4','table'),
('C.b4','TMP-wfoeecfg','C(b4)','number',10,10.5,11,11.5,12,NULL,23,1,'','b4','table'),
('T.b4','TMP-wfoeecfg','T(b4)','number',10,10.5,11,11.5,12,NULL,24,1,'','b4','table'),

-- b1-b2/2 (25-27)
('H.b1-b2/2','TMP-wfoeecfg','H(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,25,1,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-wfoeecfg','C(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,26,1,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-wfoeecfg','T(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,27,1,'','b1-b2/2','table'),

-- b3-b4/2 (28-30)
('H.b3-b4/2','TMP-wfoeecfg','H(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,28,1,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-wfoeecfg','C(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,29,1,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-wfoeecfg','T(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,30,1,'','b3-b4/2','table'),

-- t1 (31-33)
('H.t1','TMP-wfoeecfg','H(t1)','number',10,10.5,11,11.5,12,NULL,31,1,'','t1','table'),
('C.t1','TMP-wfoeecfg','C(t1)','number',10,10.5,11,11.5,12,NULL,32,1,'','t1','table'),
('T.t1','TMP-wfoeecfg','T(t1)','number',10,10.5,11,11.5,12,NULL,33,1,'','t1','table'),

-- t3 (34-36)
('H.t3','TMP-wfoeecfg','H(t3)','number',10,10.5,11,11.5,12,NULL,34,1,'','t3','table'),
('C.t3','TMP-wfoeecfg','C(t3)','number',10,10.5,11,11.5,12,NULL,35,1,'','t3','table'),
('T.t3','TMP-wfoeecfg','T(t3)','number',10,10.5,11,11.5,12,NULL,36,1,'','t3','table'),

-- t2 (37-39)
('H.t2','TMP-wfoeecfg','H(t2)','number',10,10.5,11,11.5,12,NULL,37,1,'','t2','table'),
('C.t2','TMP-wfoeecfg','C(t2)','number',10,10.5,11,11.5,12,NULL,38,1,'','t2','table'),
('T.t2','TMP-wfoeecfg','T(t2)','number',10,10.5,11,11.5,12,NULL,39,1,'','t2','table'),

-- t4 (40-42)
('H.t4','TMP-wfoeecfg','H(t4)','number',10,10.5,11,11.5,12,NULL,40,1,'','t4','table'),
('C.t4','TMP-wfoeecfg','C(t4)','number',10,10.5,11,11.5,12,NULL,41,1,'','t4','table'),
('T.t4','TMP-wfoeecfg','T(t4)','number',10,10.5,11,11.5,12,NULL,42,1,'','t4','table'),

-- t5 (43-45)
('H.t5','TMP-wfoeecfg','H(t5)','number',6.3,6.65,7,7.35,7.7,NULL,43,1,'','t5','table'),
('C.t5','TMP-wfoeecfg','C(t5)','number',6.3,6.65,7,7.35,7.7,NULL,44,1,'','t5','table'),
('T.t5','TMP-wfoeecfg','T(t5)','number',6.3,6.65,7,7.35,7.7,NULL,45,1,'','t5','table'),

-- t6 (NULL)
('H.t6','TMP-wfoeecfg','H(t6)','number',6.3,6.65,7,7.35,7.7,NULL,NULL,1,'','t6','table'),
('C.t6','TMP-wfoeecfg','C(t6)','number',6.3,6.65,7,7.35,7.7,NULL,NULL,1,'','t6','table'),
('T.t6','TMP-wfoeecfg','T(t6)','number',6.3,6.65,7,7.35,7.7,NULL,NULL,1,'','t6','table'),

-- t7 (NULL)
('H.t7','TMP-wfoeecfg','H(t7)','number',6.3,6.65,7,7.35,7.7,NULL,NULL,1,'','t7','table'),
('C.t7','TMP-wfoeecfg','C(t7)','number',6.3,6.65,7,7.35,7.7,NULL,NULL,1,'','t7','table'),
('T.t7','TMP-wfoeecfg','T(t7)','number',6.3,6.65,7,7.35,7.7,NULL,NULL,1,'','t7','table'),

-- FormRight (46-54)
('height.of.flange','TMP-wfoeecfg','Height of Flange','number',172.5,173.75,175,176.25,177.5,0,46,1,'','FormRight','Height of Flange'),
('flange.thickness','TMP-wfoeecfg','Flange Thickness','number',10,10.5,11,11.5,12,0,47,1,'','FormRight','Flange Thickness'),
('width.of.web','TMP-wfoeecfg','Width of Web','number',348,349,350,351,352,0,48,1,'','FormRight','Width of Web'),
('web.thickness','TMP-wfoeecfg','Web Thickness','number',6.3,6.65,7,7.35,7.7,0,49,1,'','FormRight','Web Thickness'),
('unit.weight','TMP-wfoeecfg','Unit Weight (Kgm)','number',47.4,48.4,49.4,50.4,51.4,0,50,1,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-wfoeecfg','Radius','number',0,0,13,0,0,0,51,1,'','FormRight','Radius'),
('web.off.center','TMP-wfoeecfg','Web Off Center','number',-3.5,-1.75,0,1.75,3.5,0,52,1,'','FormRight','Web Off Center'),
('os','TMP-wfoeecfg','OS','number',0,0,2.1,0,0,0,53,1,'','FormRight','OS'),
('cow','TMP-wfoeecfg','CoW','number',0,0,0,0,0,2,54,1,'','FormRight','CoW');

INSERT INTO `qc_template_mapping` (`mapping_id`, `qc_template_id`, `group_name`, `position`, `order_numb`) VALUES
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfoeecfg', 'Width of Web', 'H-Top', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfoeecfg', 'Width of Web', 'H-Bottom', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfoeecfg', 'Height of Flange', 'B1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfoeecfg', 'Height of Flange', 'B2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfoeecfg', 'Flange Thickness', 't1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfoeecfg', 'Flange Thickness', 't2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfoeecfg', 'Flange Thickness', 't3', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfoeecfg', 'Flange Thickness', 't4', 3),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfoeecfg', 'Flange Thickness', 'b1', 4),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfoeecfg', 'Flange Thickness', 'b2', 5),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfoeecfg', 'Flange Thickness', 'b3', 6),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfoeecfg', 'Flange Thickness', 'b4', 7),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfoeecfg', 'Web Thickness', 't5', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfoeecfg', 'Web Off Center', 'b1-b2/2', 8),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfoeecfg', 'Web Off Center', 'b3-b4/2', 9),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfoeecfg', 'Radius', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfoeecfg', 'CoW', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfoeecfg', 'OS', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfoeecfg', 'Unit Weight (Kgm)', '', 0);