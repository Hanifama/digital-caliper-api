-- Template wf-beam WF 588X300X12X20
INSERT INTO `qc_template` (`qc_template_id`, `prodtype_id`, `size_id`, `profile`, `std_dimention`, `brand_merek`, `specification`, `name`, `status`, `created_by`, `created_dt`, `updated_by`, `updated_dt`) VALUES
('TMP-wfvllibm','WF-BEAM','WF 588X300X12X20','WF 588X300X12X20','588X300X12X20','WF-BEAM 588X300X12X20','WF 588X300X12X20','Template WF-BEAM 588X300X12X20','active','Akun Testing Manajer','2025-11-08 13:00:00','Akun Testing Manajer','2025-11-08 13:00:00');

INSERT INTO `qc_template_data` (`input_code`, `qc_template_id`, `label`, `input_type`, `min_tolerance`, `t_lt_50_tolerance`, `nominal_tolerance`, `t_gt_50_tolerance`, `max_tolerance`, `actual_tolerance`, `order_numb`, `enabled`, `sound`, `position`, `group_name`) VALUES
-- H-Top (1-3) - Width of Web (Tinggi Web)
('H.H-top','TMP-wfvllibm','H(H-top)','number',585,586.5,588,589.5,591,NULL,1,1,'','H-Top','table'),
('C.H-top','TMP-wfvllibm','C(H-top)','number',585,586.5,588,589.5,591,NULL,2,1,'','H-Top','table'),
('T.H-top','TMP-wfvllibm','T(H-top)','number',585,586.5,588,589.5,591,NULL,3,1,'','H-Top','table'),

-- H-Center (4-6) - Width of Web (Tinggi Web)
('H.H-center','TMP-wfvllibm','H(H-center)','number',585,586.5,588,589.5,591,NULL,4,1,'','H-Center','table'),
('C.H-center','TMP-wfvllibm','C(H-center)','number',585,586.5,588,589.5,591,NULL,5,1,'','H-Center','table'),
('T.H-center','TMP-wfvllibm','T(H-center)','number',585,586.5,588,589.5,591,NULL,6,1,'','H-Center','table'),

-- H-Bottom (7-9) - Width of Web (Tinggi Web)
('H.H-bottom','TMP-wfvllibm','H(H-bottom)','number',585,586.5,588,589.5,591,NULL,7,1,'','H-Bottom','table'),
('C.H-bottom','TMP-wfvllibm','C(H-bottom)','number',585,586.5,588,589.5,591,NULL,8,1,'','H-Bottom','table'),
('T.H-bottom','TMP-wfvllibm','T(H-bottom)','number',585,586.5,588,589.5,591,NULL,9,1,'','H-Bottom','table'),

-- B1 (10-12) - Height of Flange (Lebar Kaki)
('H.B1','TMP-wfvllibm','H(B1)','number',297,298.5,300,301.5,303,NULL,10,1,'','B1','table'),
('C.B1','TMP-wfvllibm','C(B1)','number',297,298.5,300,301.5,303,NULL,11,1,'','B1','table'),
('T.B1','TMP-wfvllibm','T(B1)','number',297,298.5,300,301.5,303,NULL,12,1,'','B1','table'),

-- B2 (13-15) - Height of Flange (Lebar Kaki)
('H.B2','TMP-wfvllibm','H(B2)','number',297,298.5,300,301.5,303,NULL,13,1,'','B2','table'),
('C.B2','TMP-wfvllibm','C(B2)','number',297,298.5,300,301.5,303,NULL,14,1,'','B2','table'),
('T.B2','TMP-wfvllibm','T(B2)','number',297,298.5,300,301.5,303,NULL,15,1,'','B2','table'),

-- t1 (16-18) - Flange Thickness (Tebal Kaki)
('H.t1','TMP-wfvllibm','H(t1)','number',18.5,19.25,20,20.75,21.5,NULL,16,1,'','t1','table'),
('C.t1','TMP-wfvllibm','C(t1)','number',18.5,19.25,20,20.75,21.5,NULL,17,1,'','t1','table'),
('T.t1','TMP-wfvllibm','T(t1)','number',18.5,19.25,20,20.75,21.5,NULL,18,1,'','t1','table'),

-- t2 (19-21) - Flange Thickness (Tebal Kaki)
('H.t2','TMP-wfvllibm','H(t2)','number',18.5,19.25,20,20.75,21.5,NULL,19,1,'','t2','table'),
('C.t2','TMP-wfvllibm','C(t2)','number',18.5,19.25,20,20.75,21.5,NULL,20,1,'','t2','table'),
('T.t2','TMP-wfvllibm','T(t2)','number',18.5,19.25,20,20.75,21.5,NULL,21,1,'','t2','table'),

-- t3 (22-24) - Flange Thickness (Tebal Kaki)
('H.t3','TMP-wfvllibm','H(t3)','number',18.5,19.25,20,20.75,21.5,NULL,22,1,'','t3','table'),
('C.t3','TMP-wfvllibm','C(t3)','number',18.5,19.25,20,20.75,21.5,NULL,23,1,'','t3','table'),
('T.t3','TMP-wfvllibm','T(t3)','number',18.5,19.25,20,20.75,21.5,NULL,24,1,'','t3','table'),

-- t4 (25-27) - Flange Thickness (Tebal Kaki)
('H.t4','TMP-wfvllibm','H(t4)','number',18.5,19.25,20,20.75,21.5,NULL,25,1,'','t4','table'),
('C.t4','TMP-wfvllibm','C(t4)','number',18.5,19.25,20,20.75,21.5,NULL,26,1,'','t4','table'),
('T.t4','TMP-wfvllibm','T(t4)','number',18.5,19.25,20,20.75,21.5,NULL,27,1,'','t4','table'),

-- t5 (28-30) - Web Thickness (Tebal Web)
('H.t5','TMP-wfvllibm','H(t5)','number',11.3,11.65,12,12.35,12.7,NULL,28,1,'','t5','table'),
('C.t5','TMP-wfvllibm','C(t5)','number',11.3,11.65,12,12.35,12.7,NULL,29,1,'','t5','table'),
('T.t5','TMP-wfvllibm','T(t5)','number',11.3,11.65,12,12.35,12.7,NULL,30,1,'','t5','table'),

-- b1 (31-33) - Flange Thickness (Tebal Kaki)
('H.b1','TMP-wfvllibm','H(b1)','number',18.5,19.25,20,20.75,21.5,NULL,31,1,'','b1','table'),
('C.b1','TMP-wfvllibm','C(b1)','number',18.5,19.25,20,20.75,21.5,NULL,32,1,'','b1','table'),
('T.b1','TMP-wfvllibm','T(b1)','number',18.5,19.25,20,20.75,21.5,NULL,33,1,'','b1','table'),

-- b3 (34-36) - Flange Thickness (Tebal Kaki)
('H.b3','TMP-wfvllibm','H(b3)','number',18.5,19.25,20,20.75,21.5,NULL,34,1,'','b3','table'),
('C.b3','TMP-wfvllibm','C(b3)','number',18.5,19.25,20,20.75,21.5,NULL,35,1,'','b3','table'),
('T.b3','TMP-wfvllibm','T(b3)','number',18.5,19.25,20,20.75,21.5,NULL,36,1,'','b3','table'),

-- b2 (37-39) - Flange Thickness (Tebal Kaki)
('H.b2','TMP-wfvllibm','H(b2)','number',18.5,19.25,20,20.75,21.5,NULL,37,1,'','b2','table'),
('C.b2','TMP-wfvllibm','C(b2)','number',18.5,19.25,20,20.75,21.5,NULL,38,1,'','b2','table'),
('T.b2','TMP-wfvllibm','T(b2)','number',18.5,19.25,20,20.75,21.5,NULL,39,1,'','b2','table'),

-- b4 (40-42) - Flange Thickness (Tebal Kaki)
('H.b4','TMP-wfvllibm','H(b4)','number',18.5,19.25,20,20.75,21.5,NULL,40,1,'','b4','table'),
('C.b4','TMP-wfvllibm','C(b4)','number',18.5,19.25,20,20.75,21.5,NULL,41,1,'','b4','table'),
('T.b4','TMP-wfvllibm','T(b4)','number',18.5,19.25,20,20.75,21.5,NULL,42,1,'','b4','table'),

-- b1-b2/2 (43-45) - Web Off Center (WOC)
('H.b1-b2/2','TMP-wfvllibm','H(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,43,1,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-wfvllibm','C(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,44,1,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-wfvllibm','T(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,45,1,'','b1-b2/2','table'),

-- b3-b4/2 (46-48) - Web Off Center (WOC)
('H.b3-b4/2','TMP-wfvllibm','H(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,46,1,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-wfvllibm','C(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,47,1,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-wfvllibm','T(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,48,1,'','b3-b4/2','table'),

-- FormRight (49-57)
('height.of.flange','TMP-wfvllibm','Height of Flange','number',297,298.5,300,301.5,303,0,49,1,'','FormRight','Height of Flange'),
('flange.thickness','TMP-wfvllibm','Flange Thickness','number',18.5,19.25,20,20.75,21.5,0,50,1,'','FormRight','Flange Thickness'),
('width.of.web','TMP-wfvllibm','Width of Web','number',585,586.5,588,589.5,591,0,51,1,'','FormRight','Width of Web'),
('web.thickness','TMP-wfvllibm','Web Thickness','number',11.3,11.65,12,12.35,12.7,0,52,1,'','FormRight','Web Thickness'),
('unit.weight','TMP-wfvllibm','Unit Weight (Kgm)','number',141.1,144.05,147,149.95,152.9,0,53,1,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-wfvllibm','Radius','number',0,0,13,0,0,0,54,1,'','FormRight','Radius'),
('web.off.center','TMP-wfvllibm','Web Off Center','number',-3.5,-1.75,0,1.75,3.5,0,55,1,'','FormRight','Web Off Center'),
('os','TMP-wfvllibm','OS','number',0,0,3.6,0,0,0,56,1,'','FormRight','OS'),
('cow','TMP-wfvllibm','CoW','number',0,0,0,0,0,2.5,57,1,'','FormRight','CoW');

INSERT INTO `qc_template_mapping` (`mapping_id`, `qc_template_id`, `group_name`, `position`, `order_numb`) VALUES
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfvllibm', 'Width of Web', 'H-Top', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfvllibm', 'Width of Web', 'H-Center', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfvllibm', 'Width of Web', 'H-Bottom', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfvllibm', 'Height of Flange', 'B1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfvllibm', 'Height of Flange', 'B2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfvllibm', 'Flange Thickness', 't1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfvllibm', 'Flange Thickness', 't2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfvllibm', 'Flange Thickness', 't3', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfvllibm', 'Flange Thickness', 't4', 3),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfvllibm', 'Flange Thickness', 'b1', 4),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfvllibm', 'Flange Thickness', 'b2', 5),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfvllibm', 'Flange Thickness', 'b3', 6),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfvllibm', 'Flange Thickness', 'b4', 7),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfvllibm', 'Web Thickness', 't5', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfvllibm', 'Web Off Center', 'b1-b2/2', 8),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfvllibm', 'Web Off Center', 'b3-b4/2', 9),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfvllibm', 'Radius', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfvllibm', 'CoW', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfvllibm', 'OS', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfvllibm', 'Unit Weight (Kgm)', '', 0);
