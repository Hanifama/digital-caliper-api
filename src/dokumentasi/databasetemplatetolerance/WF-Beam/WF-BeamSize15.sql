-- Template wf-beam HB 350X175X7X11
INSERT INTO `qc_template` (`qc_template_id`, `prodtype_id`, `size_id`, `profile`, `std_dimention`, `brand_merek`, `specification`, `name`, `status`, `created_by`, `created_dt`, `updated_by`, `updated_dt`) VALUES
('TMP-wfoeecfg','WF-BEAM','HB 350X175X7X11','HB 350X175X7X11','350X175X7X11','WF-BEAM 350X175X7X11','HB 350X175X7X11','Template WF-BEAM 350X175X7X11','active','Akun Testing Manajer','2025-11-08 13:00:00','Akun Testing Manajer','2025-11-08 13:00:00');

INSERT INTO `qc_template_data` (`input_code`, `qc_template_id`, `label`, `input_type`, `min_tolerance`, `t_lt_50_tolerance`, `nominal_tolerance`, `t_gt_50_tolerance`, `max_tolerance`, `actual_tolerance`, `order_numb`, `enabled`, `sound`, `position`, `group_name`) VALUES
-- H-Top (1-3) - Width of Web (Tinggi Web)
('H.H-top','TMP-wfoeecfg','H(H-top)','number',348,349,350,351,352,NULL,1,1,'','H-Top','table'),
('C.H-top','TMP-wfoeecfg','C(H-top)','number',348,349,350,351,352,NULL,2,1,'','H-Top','table'),
('T.H-top','TMP-wfoeecfg','T(H-top)','number',348,349,350,351,352,NULL,3,1,'','H-Top','table'),

-- H-Center (4-6) - Width of Web (Tinggi Web)
('H.H-center','TMP-wfoeecfg','H(H-center)','number',348,349,350,351,352,NULL,4,1,'','H-Center','table'),
('C.H-center','TMP-wfoeecfg','C(H-center)','number',348,349,350,351,352,NULL,5,1,'','H-Center','table'),
('T.H-center','TMP-wfoeecfg','T(H-center)','number',348,349,350,351,352,NULL,6,1,'','H-Center','table'),

-- H-Bottom (7-9) - Width of Web (Tinggi Web)
('H.H-bottom','TMP-wfoeecfg','H(H-bottom)','number',348,349,350,351,352,NULL,7,1,'','H-Bottom','table'),
('C.H-bottom','TMP-wfoeecfg','C(H-bottom)','number',348,349,350,351,352,NULL,8,1,'','H-Bottom','table'),
('T.H-bottom','TMP-wfoeecfg','T(H-bottom)','number',348,349,350,351,352,NULL,9,1,'','H-Bottom','table'),

-- B1 (10-12) - Height of Flange (Lebar Kaki)
('H.B1','TMP-wfoeecfg','H(B1)','number',172.5,173.75,175,176.25,177.5,NULL,10,1,'','B1','table'),
('C.B1','TMP-wfoeecfg','C(B1)','number',172.5,173.75,175,176.25,177.5,NULL,11,1,'','B1','table'),
('T.B1','TMP-wfoeecfg','T(B1)','number',172.5,173.75,175,176.25,177.5,NULL,12,1,'','B1','table'),

-- B2 (13-15) - Height of Flange (Lebar Kaki)
('H.B2','TMP-wfoeecfg','H(B2)','number',172.5,173.75,175,176.25,177.5,NULL,13,1,'','B2','table'),
('C.B2','TMP-wfoeecfg','C(B2)','number',172.5,173.75,175,176.25,177.5,NULL,14,1,'','B2','table'),
('T.B2','TMP-wfoeecfg','T(B2)','number',172.5,173.75,175,176.25,177.5,NULL,15,1,'','B2','table'),

-- t1 (16-18) - Flange Thickness (Tebal Kaki)
('H.t1','TMP-wfoeecfg','H(t1)','number',10,10.5,11,11.5,12,NULL,16,1,'','t1','table'),
('C.t1','TMP-wfoeecfg','C(t1)','number',10,10.5,11,11.5,12,NULL,17,1,'','t1','table'),
('T.t1','TMP-wfoeecfg','T(t1)','number',10,10.5,11,11.5,12,NULL,18,1,'','t1','table'),

-- t2 (19-21) - Flange Thickness (Tebal Kaki)
('H.t2','TMP-wfoeecfg','H(t2)','number',10,10.5,11,11.5,12,NULL,19,1,'','t2','table'),
('C.t2','TMP-wfoeecfg','C(t2)','number',10,10.5,11,11.5,12,NULL,20,1,'','t2','table'),
('T.t2','TMP-wfoeecfg','T(t2)','number',10,10.5,11,11.5,12,NULL,21,1,'','t2','table'),

-- t3 (22-24) - Flange Thickness (Tebal Kaki)
('H.t3','TMP-wfoeecfg','H(t3)','number',10,10.5,11,11.5,12,NULL,22,1,'','t3','table'),
('C.t3','TMP-wfoeecfg','C(t3)','number',10,10.5,11,11.5,12,NULL,23,1,'','t3','table'),
('T.t3','TMP-wfoeecfg','T(t3)','number',10,10.5,11,11.5,12,NULL,24,1,'','t3','table'),

-- t4 (25-27) - Flange Thickness (Tebal Kaki)
('H.t4','TMP-wfoeecfg','H(t4)','number',10,10.5,11,11.5,12,NULL,25,1,'','t4','table'),
('C.t4','TMP-wfoeecfg','C(t4)','number',10,10.5,11,11.5,12,NULL,26,1,'','t4','table'),
('T.t4','TMP-wfoeecfg','T(t4)','number',10,10.5,11,11.5,12,NULL,27,1,'','t4','table'),

-- t5 (28-30) - Web Thickness (Tebal Web)
('H.t5','TMP-wfoeecfg','H(t5)','number',6.3,6.65,7,7.35,7.7,NULL,28,1,'','t5','table'),
('C.t5','TMP-wfoeecfg','C(t5)','number',6.3,6.65,7,7.35,7.7,NULL,29,1,'','t5','table'),
('T.t5','TMP-wfoeecfg','T(t5)','number',6.3,6.65,7,7.35,7.7,NULL,30,1,'','t5','table'),

-- b1 (31-33) - Flange Thickness (Tebal Kaki)
('H.b1','TMP-wfoeecfg','H(b1)','number',10,10.5,11,11.5,12,NULL,31,1,'','b1','table'),
('C.b1','TMP-wfoeecfg','C(b1)','number',10,10.5,11,11.5,12,NULL,32,1,'','b1','table'),
('T.b1','TMP-wfoeecfg','T(b1)','number',10,10.5,11,11.5,12,NULL,33,1,'','b1','table'),

-- b3 (34-36) - Flange Thickness (Tebal Kaki)
('H.b3','TMP-wfoeecfg','H(b3)','number',10,10.5,11,11.5,12,NULL,34,1,'','b3','table'),
('C.b3','TMP-wfoeecfg','C(b3)','number',10,10.5,11,11.5,12,NULL,35,1,'','b3','table'),
('T.b3','TMP-wfoeecfg','T(b3)','number',10,10.5,11,11.5,12,NULL,36,1,'','b3','table'),

-- b2 (37-39) - Flange Thickness (Tebal Kaki)
('H.b2','TMP-wfoeecfg','H(b2)','number',10,10.5,11,11.5,12,NULL,37,1,'','b2','table'),
('C.b2','TMP-wfoeecfg','C(b2)','number',10,10.5,11,11.5,12,NULL,38,1,'','b2','table'),
('T.b2','TMP-wfoeecfg','T(b2)','number',10,10.5,11,11.5,12,NULL,39,1,'','b2','table'),

-- b4 (40-42) - Flange Thickness (Tebal Kaki)
('H.b4','TMP-wfoeecfg','H(b4)','number',10,10.5,11,11.5,12,NULL,40,1,'','b4','table'),
('C.b4','TMP-wfoeecfg','C(b4)','number',10,10.5,11,11.5,12,NULL,41,1,'','b4','table'),
('T.b4','TMP-wfoeecfg','T(b4)','number',10,10.5,11,11.5,12,NULL,42,1,'','b4','table'),

-- b1-b2/2 (43-45) - Web Off Center (WOC)
('H.b1-b2/2','TMP-wfoeecfg','H(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,43,1,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-wfoeecfg','C(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,44,1,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-wfoeecfg','T(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,45,1,'','b1-b2/2','table'),

-- b3-b4/2 (46-48) - Web Off Center (WOC)
('H.b3-b4/2','TMP-wfoeecfg','H(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,46,1,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-wfoeecfg','C(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,47,1,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-wfoeecfg','T(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,48,1,'','b3-b4/2','table'),

-- FormRight (49-57)
('height.of.flange','TMP-wfoeecfg','Height of Flange','number',172.5,173.75,175,176.25,177.5,0,49,1,'','FormRight','Height of Flange'),
('flange.thickness','TMP-wfoeecfg','Flange Thickness','number',10,10.5,11,11.5,12,0,50,1,'','FormRight','Flange Thickness'),
('width.of.web','TMP-wfoeecfg','Width of Web','number',348,349,350,351,352,0,51,1,'','FormRight','Width of Web'),
('web.thickness','TMP-wfoeecfg','Web Thickness','number',6.3,6.65,7,7.35,7.7,0,52,1,'','FormRight','Web Thickness'),
('unit.weight','TMP-wfoeecfg','Unit Weight (Kgm)','number',47.4,48.4,49.4,50.4,51.4,0,53,1,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-wfoeecfg','Radius','number',0,0,13,0,0,0,54,1,'','FormRight','Radius'),
('web.off.center','TMP-wfoeecfg','Web Off Center','number',-3.5,-1.75,0,1.75,3.5,0,55,1,'','FormRight','Web Off Center'),
('os','TMP-wfoeecfg','OS','number',0,0,2.1,0,0,0,56,1,'','FormRight','OS'),
('cow','TMP-wfoeecfg','CoW','number',0,0,0,0,0,2,57,1,'','FormRight','CoW');

INSERT INTO `qc_template_mapping` (`mapping_id`, `qc_template_id`, `group_name`, `position`, `order_numb`) VALUES
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfoeecfg', 'Width of Web', 'H-Top', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfoeecfg', 'Width of Web', 'H-Center', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfoeecfg', 'Width of Web', 'H-Bottom', 2),
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