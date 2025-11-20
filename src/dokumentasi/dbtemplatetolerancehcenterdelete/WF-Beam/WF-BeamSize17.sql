-- Template wf-beam WF 396X199X7X11
INSERT INTO `qc_template` (`qc_template_id`, `prodtype_id`, `size_id`, `profile`, `std_dimention`, `brand_merek`, `specification`, `name`, `status`, `created_by`, `created_dt`, `updated_by`, `updated_dt`) VALUES
('TMP-wfqggeti','WF-BEAM','WF 396X199X7X11','WF 396X199X7X11','396X199X7X11','WF-BEAM 396X199X7X11','WF 396X199X7X11','Template WF-BEAM 396X199X7X11','active','Akun Testing Manajer','2025-11-08 13:00:00','Akun Testing Manajer','2025-11-08 13:00:00');

INSERT INTO `qc_template_data` (`input_code`, `qc_template_id`, `label`, `input_type`, `min_tolerance`, `t_lt_50_tolerance`, `nominal_tolerance`, `t_gt_50_tolerance`, `max_tolerance`, `actual_tolerance`, `order_numb`, `enabled`, `sound`, `position`, `group_name`) VALUES
-- H-Top (1-3) - Width of Web (Tinggi Web)
('H.H-top','TMP-wfqggeti','H(H-top)','number',394,395,396,397,398,NULL,1,1,'','H-Top','table'),
('C.H-top','TMP-wfqggeti','C(H-top)','number',394,395,396,397,398,NULL,2,1,'','H-Top','table'),
('T.H-top','TMP-wfqggeti','T(H-top)','number',394,395,396,397,398,NULL,3,1,'','H-Top','table'),

-- H-Bottom (4-6) - Width of Web (Tinggi Web)
('H.H-bottom','TMP-wfqggeti','H(H-bottom)','number',394,395,396,397,398,NULL,4,1,'','H-Bottom','table'),
('C.H-bottom','TMP-wfqggeti','C(H-bottom)','number',394,395,396,397,398,NULL,5,1,'','H-Bottom','table'),
('T.H-bottom','TMP-wfqggeti','T(H-bottom)','number',394,395,396,397,398,NULL,6,1,'','H-Bottom','table'),

-- B1 (7-9) - Height of Flange (Lebar Kaki)
('H.B1','TMP-wfqggeti','H(B1)','number',196.5,197.75,199,200.25,201.5,NULL,7,1,'','B1','table'),
('C.B1','TMP-wfqggeti','C(B1)','number',196.5,197.75,199,200.25,201.5,NULL,8,1,'','B1','table'),
('T.B1','TMP-wfqggeti','T(B1)','number',196.5,197.75,199,200.25,201.5,NULL,9,1,'','B1','table'),

-- B2 (10-12) - Height of Flange (Lebar Kaki)
('H.B2','TMP-wfqggeti','H(B2)','number',196.5,197.75,199,200.25,201.5,NULL,10,1,'','B2','table'),
('C.B2','TMP-wfqggeti','C(B2)','number',196.5,197.75,199,200.25,201.5,NULL,11,1,'','B2','table'),
('T.B2','TMP-wfqggeti','T(B2)','number',196.5,197.75,199,200.25,201.5,NULL,12,1,'','B2','table'),

-- t1 (13-15) - Flange Thickness (Tebal Kaki)
('H.t1','TMP-wfqggeti','H(t1)','number',10,10.5,11,11.5,12,NULL,13,1,'','t1','table'),
('C.t1','TMP-wfqggeti','C(t1)','number',10,10.5,11,11.5,12,NULL,14,1,'','t1','table'),
('T.t1','TMP-wfqggeti','T(t1)','number',10,10.5,11,11.5,12,NULL,15,1,'','t1','table'),

-- t2 (16-18) - Flange Thickness (Tebal Kaki)
('H.t2','TMP-wfqggeti','H(t2)','number',10,10.5,11,11.5,12,NULL,16,1,'','t2','table'),
('C.t2','TMP-wfqggeti','C(t2)','number',10,10.5,11,11.5,12,NULL,17,1,'','t2','table'),
('T.t2','TMP-wfqggeti','T(t2)','number',10,10.5,11,11.5,12,NULL,18,1,'','t2','table'),

-- t3 (19-21) - Flange Thickness (Tebal Kaki)
('H.t3','TMP-wfqggeti','H(t3)','number',10,10.5,11,11.5,12,NULL,19,1,'','t3','table'),
('C.t3','TMP-wfqggeti','C(t3)','number',10,10.5,11,11.5,12,NULL,20,1,'','t3','table'),
('T.t3','TMP-wfqggeti','T(t3)','number',10,10.5,11,11.5,12,NULL,21,1,'','t3','table'),

-- t4 (22-24) - Flange Thickness (Tebal Kaki)
('H.t4','TMP-wfqggeti','H(t4)','number',10,10.5,11,11.5,12,NULL,22,1,'','t4','table'),
('C.t4','TMP-wfqggeti','C(t4)','number',10,10.5,11,11.5,12,NULL,23,1,'','t4','table'),
('T.t4','TMP-wfqggeti','T(t4)','number',10,10.5,11,11.5,12,NULL,24,1,'','t4','table'),

-- t5 (25-27) - Web Thickness (Tebal Web)
('H.t5','TMP-wfqggeti','H(t5)','number',6.3,6.65,7,7.35,7.7,NULL,25,1,'','t5','table'),
('C.t5','TMP-wfqggeti','C(t5)','number',6.3,6.65,7,7.35,7.7,NULL,26,1,'','t5','table'),
('T.t5','TMP-wfqggeti','T(t5)','number',6.3,6.65,7,7.35,7.7,NULL,27,1,'','t5','table'),

-- b1 (28-30) - Flange Thickness (Tebal Kaki)
('H.b1','TMP-wfqggeti','H(b1)','number',10,10.5,11,11.5,12,NULL,28,1,'','b1','table'),
('C.b1','TMP-wfqggeti','C(b1)','number',10,10.5,11,11.5,12,NULL,29,1,'','b1','table'),
('T.b1','TMP-wfqggeti','T(b1)','number',10,10.5,11,11.5,12,NULL,30,1,'','b1','table'),

-- b3 (31-33) - Flange Thickness (Tebal Kaki)
('H.b3','TMP-wfqggeti','H(b3)','number',10,10.5,11,11.5,12,NULL,31,1,'','b3','table'),
('C.b3','TMP-wfqggeti','C(b3)','number',10,10.5,11,11.5,12,NULL,32,1,'','b3','table'),
('T.b3','TMP-wfqggeti','T(b3)','number',10,10.5,11,11.5,12,NULL,33,1,'','b3','table'),

-- b2 (34-36) - Flange Thickness (Tebal Kaki)
('H.b2','TMP-wfqggeti','H(b2)','number',10,10.5,11,11.5,12,NULL,34,1,'','b2','table'),
('C.b2','TMP-wfqggeti','C(b2)','number',10,10.5,11,11.5,12,NULL,35,1,'','b2','table'),
('T.b2','TMP-wfqggeti','T(b2)','number',10,10.5,11,11.5,12,NULL,36,1,'','b2','table'),

-- b4 (37-39) - Flange Thickness (Tebal Kaki)
('H.b4','TMP-wfqggeti','H(b4)','number',10,10.5,11,11.5,12,NULL,37,1,'','b4','table'),
('C.b4','TMP-wfqggeti','C(b4)','number',10,10.5,11,11.5,12,NULL,38,1,'','b4','table'),
('T.b4','TMP-wfqggeti','T(b4)','number',10,10.5,11,11.5,12,NULL,39,1,'','b4','table'),

-- b1-b2/2 (40-42) - Web Off Center (WOC)
('H.b1-b2/2','TMP-wfqggeti','H(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,40,1,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-wfqggeti','C(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,41,1,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-wfqggeti','T(b1-b2/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,42,1,'','b1-b2/2','table'),

-- b3-b4/2 (43-45) - Web Off Center (WOC)
('H.b3-b4/2','TMP-wfqggeti','H(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,43,1,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-wfqggeti','C(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,44,1,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-wfqggeti','T(b3-b4/2)','number',-3.5,-1.75,0,1.75,3.5,NULL,45,1,'','b3-b4/2','table'),

-- FormRight (46-54)
('height.of.flange','TMP-wfqggeti','Height of Flange','number',196.5,197.75,199,200.25,201.5,0,46,1,'','FormRight','Height of Flange'),
('flange.thickness','TMP-wfqggeti','Flange Thickness','number',10,10.5,11,11.5,12,0,47,1,'','FormRight','Flange Thickness'),
('width.of.web','TMP-wfqggeti','Width of Web','number',394,395,396,397,398,0,48,1,'','FormRight','Width of Web'),
('web.thickness','TMP-wfqggeti','Web Thickness','number',6.3,6.65,7,7.35,7.7,0,49,1,'','FormRight','Web Thickness'),
('unit.weight','TMP-wfqggeti','Unit Weight (Kgm)','number',53.9,55.0,56.1,57.2,58.3,0,50,1,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-wfqggeti','Radius','number',0,0,13,0,0,0,51,1,'','FormRight','Radius'),
('web.off.center','TMP-wfqggeti','Web Off Center','number',-3.5,-1.75,0,1.75,3.5,0,52,1,'','FormRight','Web Off Center'),
('os','TMP-wfqggeti','OS','number',0,0,2.39,0,0,0,53,1,'','FormRight','OS'),
('cow','TMP-wfqggeti','CoW','number',0,0,0,0,0,2,54,1,'','FormRight','CoW');

INSERT INTO `qc_template_mapping` (`mapping_id`, `qc_template_id`, `group_name`, `position`, `order_numb`) VALUES
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfqggeti', 'Width of Web', 'H-Top', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfqggeti', 'Width of Web', 'H-Bottom', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfqggeti', 'Height of Flange', 'B1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfqggeti', 'Height of Flange', 'B2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfqggeti', 'Flange Thickness', 't1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfqggeti', 'Flange Thickness', 't2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfqggeti', 'Flange Thickness', 't3', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfqggeti', 'Flange Thickness', 't4', 3),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfqggeti', 'Flange Thickness', 'b1', 4),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfqggeti', 'Flange Thickness', 'b2', 5),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfqggeti', 'Flange Thickness', 'b3', 6),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfqggeti', 'Flange Thickness', 'b4', 7),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfqggeti', 'Web Thickness', 't5', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfqggeti', 'Web Off Center', 'b1-b2/2', 8),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfqggeti', 'Web Off Center', 'b3-b4/2', 9),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfqggeti', 'Radius', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfqggeti', 'CoW', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfqggeti', 'OS', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfqggeti', 'Unit Weight (Kgm)', '', 0);