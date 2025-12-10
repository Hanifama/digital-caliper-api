-- Template wf-beam 
INSERT INTO `qc_template` (`qc_template_id`, `prodtype_id`, `size_id`, `profile`, `std_dimention`, `brand_merek`, `specification`, `name`, `status`, `created_by`, `created_dt`, `updated_by`, `updated_dt`) VALUES
('TMP-wfmpcade','WF-BEAM','WF 294X200X8X12','WF 294X200X8X12','294X200X8X12','WF-BEAM 294X200X8X12','WF 294X200X8X12','Template WF-BEAM 294X200X8X12','active','Akun Testing Manajer','2025-11-08 13:00:00','Akun Testing Manajer','2025-11-08 13:00:00');

INSERT INTO `qc_template_data` (`input_code`, `qc_template_id`, `label`, `input_type`, `min_tolerance`, `t_lt_50_tolerance`, `nominal_tolerance`, `t_gt_50_tolerance`, `max_tolerance`, `actual_tolerance`, `order_numb`, `enabled`, `sound`, `position`, `group_name`) VALUES
-- H-Top (1-3) - Width of Web
('H.H-top','TMP-wfmpcade','H(H-top)','number',292,293,294,295,296,NULL,1,1,'','H-Top','table'),
('C.H-top','TMP-wfmpcade','C(H-top)','number',292,293,294,295,296,NULL,2,1,'','H-Top','table'),
('T.H-top','TMP-wfmpcade','T(H-top)','number',292,293,294,295,296,NULL,3,1,'','H-Top','table'),

-- H-Bottom (4-6) - Width of Web
('H.H-bottom','TMP-wfmpcade','H(H-bottom)','number',292,293,294,295,296,NULL,4,1,'','H-Bottom','table'),
('C.H-bottom','TMP-wfmpcade','C(H-bottom)','number',292,293,294,295,296,NULL,5,1,'','H-Bottom','table'),
('T.H-bottom','TMP-wfmpcade','T(H-bottom)','number',292,293,294,295,296,NULL,6,1,'','H-Bottom','table'),

-- B1 (7-9) - Height of Flange
('H.B1','TMP-wfmpcade','H(B1)','number',197,198.5,200,201.5,203,NULL,7,1,'','B1','table'),
('C.B1','TMP-wfmpcade','C(B1)','number',197,198.5,200,201.5,203,NULL,8,1,'','B1','table'),
('T.B1','TMP-wfmpcade','T(B1)','number',197,198.5,200,201.5,203,NULL,9,1,'','B1','table'),

-- B2 (10-12) - Height of Flange
('H.B2','TMP-wfmpcade','H(B2)','number',197,198.5,200,201.5,203,NULL,10,1,'','B2','table'),
('C.B2','TMP-wfmpcade','C(B2)','number',197,198.5,200,201.5,203,NULL,11,1,'','B2','table'),
('T.B2','TMP-wfmpcade','T(B2)','number',197,198.5,200,201.5,203,NULL,12,1,'','B2','table'),

-- b1 (13-15) - Flange Thickness
('H.b1','TMP-wfmpcade','H(b1)','number',10.5,11.25,12,12.75,13.5,NULL,13,1,'','b1','table'),
('C.b1','TMP-wfmpcade','C(b1)','number',10.5,11.25,12,12.75,13.5,NULL,14,1,'','b1','table'),
('T.b1','TMP-wfmpcade','T(b1)','number',10.5,11.25,12,12.75,13.5,NULL,15,1,'','b1','table'),

-- b3 (16-18) - Flange Thickness
('H.b3','TMP-wfmpcade','H(b3)','number',10.5,11.25,12,12.75,13.5,NULL,16,1,'','b3','table'),
('C.b3','TMP-wfmpcade','C(b3)','number',10.5,11.25,12,12.75,13.5,NULL,17,1,'','b3','table'),
('T.b3','TMP-wfmpcade','T(b3)','number',10.5,11.25,12,12.75,13.5,NULL,18,1,'','b3','table'),

-- b2 (19-21) - Flange Thickness
('H.b2','TMP-wfmpcade','H(b2)','number',10.5,11.25,12,12.75,13.5,NULL,19,1,'','b2','table'),
('C.b2','TMP-wfmpcade','C(b2)','number',10.5,11.25,12,12.75,13.5,NULL,20,1,'','b2','table'),
('T.b2','TMP-wfmpcade','T(b2)','number',10.5,11.25,12,12.75,13.5,NULL,21,1,'','b2','table'),

-- b4 (22-24) - Flange Thickness
('H.b4','TMP-wfmpcade','H(b4)','number',10.5,11.25,12,12.75,13.5,NULL,22,1,'','b4','table'),
('C.b4','TMP-wfmpcade','C(b4)','number',10.5,11.25,12,12.75,13.5,NULL,23,1,'','b4','table'),
('T.b4','TMP-wfmpcade','T(b4)','number',10.5,11.25,12,12.75,13.5,NULL,24,1,'','b4','table'),

-- b1-b2/2 (25-27) - Web Off Center 
('H.b1-b2/2','TMP-wfmpcade','H(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,25,1,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-wfmpcade','C(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,26,1,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-wfmpcade','T(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,27,1,'','b1-b2/2','table'),

-- b3-b4/2 (28-30) - Web Off Center
('H.b3-b4/2','TMP-wfmpcade','H(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,28,1,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-wfmpcade','C(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,29,1,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-wfmpcade','T(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,30,1,'','b3-b4/2','table'),

-- t1 (31-33) - Flange Thickness
('H.t1','TMP-wfmpcade','H(t1)','number',10.5,11.25,12,12.75,13.5,NULL,31,1,'','t1','table'),
('C.t1','TMP-wfmpcade','C(t1)','number',10.5,11.25,12,12.75,13.5,NULL,32,1,'','t1','table'),
('T.t1','TMP-wfmpcade','T(t1)','number',10.5,11.25,12,12.75,13.5,NULL,33,1,'','t1','table'),

-- t3 (34-36) - Flange Thickness
('H.t3','TMP-wfmpcade','H(t3)','number',10.5,11.25,12,12.75,13.5,NULL,34,1,'','t3','table'),
('C.t3','TMP-wfmpcade','C(t3)','number',10.5,11.25,12,12.75,13.5,NULL,35,1,'','t3','table'),
('T.t3','TMP-wfmpcade','T(t3)','number',10.5,11.25,12,12.75,13.5,NULL,36,1,'','t3','table'),

-- t2 (37-39) - Flange Thickness
('H.t2','TMP-wfmpcade','H(t2)','number',10.5,11.25,12,12.75,13.5,NULL,37,1,'','t2','table'),
('C.t2','TMP-wfmpcade','C(t2)','number',10.5,11.25,12,12.75,13.5,NULL,38,1,'','t2','table'),
('T.t2','TMP-wfmpcade','T(t2)','number',10.5,11.25,12,12.75,13.5,NULL,39,1,'','t2','table'),

-- t4 (40-42) - Flange Thickness
('H.t4','TMP-wfmpcade','H(t4)','number',10.5,11.25,12,12.75,13.5,NULL,40,1,'','t4','table'),
('C.t4','TMP-wfmpcade','C(t4)','number',10.5,11.25,12,12.75,13.5,NULL,41,1,'','t4','table'),
('T.t4','TMP-wfmpcade','T(t4)','number',10.5,11.25,12,12.75,13.5,NULL,42,1,'','t4','table'),

-- t5 (43-45) - Web Thickness
('H.t5','TMP-wfmpcade','H(t5)','number',7,7.65,8.3,8.95,9.6,NULL,43,1,'','t5','table'),
('C.t5','TMP-wfmpcade','C(t5)','number',7,7.65,8.3,8.95,9.6,NULL,44,1,'','t5','table'),
('T.t5','TMP-wfmpcade','T(t5)','number',7,7.65,8.3,8.95,9.6,NULL,45,1,'','t5','table'),

-- t6 (NULL) - Web Thickness
('H.t6','TMP-wfmpcade','H(t6)','number',7,7.65,8.3,8.95,9.6,NULL,NULL,1,'','t6','table'),
('C.t6','TMP-wfmpcade','C(t6)','number',7,7.65,8.3,8.95,9.6,NULL,NULL,1,'','t6','table'),
('T.t6','TMP-wfmpcade','T(t6)','number',7,7.65,8.3,8.95,9.6,NULL,NULL,1,'','t6','table'),

-- t7 (NULL) - Web Thickness
('H.t7','TMP-wfmpcade','H(t7)','number',7,7.65,8.3,8.95,9.6,NULL,NULL,1,'','t7','table'),
('C.t7','TMP-wfmpcade','C(t7)','number',7,7.65,8.3,8.95,9.6,NULL,NULL,1,'','t7','table'),
('T.t7','TMP-wfmpcade','T(t7)','number',7,7.65,8.3,8.95,9.6,NULL,NULL,1,'','t7','table'),

-- FormRight (46-54)
('height.of.flange','TMP-wfmpcade','Height of Flange','number',197,198.5,200,201.5,203,0,46,1,'','FormRight','Height of Flange'),
('flange.thickness','TMP-wfmpcade','Flange Thickness','number',10.5,11.25,12,12.75,13.5,0,47,1,'','FormRight','Flange Thickness'),
('width.of.web','TMP-wfmpcade','Width of Web','number',292,293,294,295,296,0,48,1,'','FormRight','Width of Web'),
('web.thickness','TMP-wfmpcade','Web Thickness','number',7,7.65,8.3,8.95,9.6,0,49,1,'','FormRight','Web Thickness'),
('unit.weight','TMP-wfmpcade','Unit Weight (Kgm)','number',53.4,54.6,55.8,57,58.2,0,50,1,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-wfmpcade','Radius','number',0,0,13,0,0,0,51,1,'','FormRight','Radius'),
('web.off.center','TMP-wfmpcade','Web Off Center','number',-2.5,-1.25,0,1.25,2.5,0,52,1,'','FormRight','Web Off Center'),
('os','TMP-wfmpcade','OS','number',0,0,2,0,0,0,53,1,'','FormRight','OS'),
('cow','TMP-wfmpcade','CoW','number',0,0,0,0,0,2,54,1,'','FormRight','CoW');

INSERT INTO `qc_template_mapping` (`mapping_id`, `qc_template_id`, `group_name`, `position`, `order_numb`) VALUES
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfmpcade', 'Width of Web', 'H-Top', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfmpcade', 'Width of Web', 'H-Bottom', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfmpcade', 'Height of Flange', 'B1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfmpcade', 'Height of Flange', 'B2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfmpcade', 'Flange Thickness', 't1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfmpcade', 'Flange Thickness', 't2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfmpcade', 'Flange Thickness', 't3', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfmpcade', 'Flange Thickness', 't4', 3),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfmpcade', 'Flange Thickness', 'b1', 4),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfmpcade', 'Flange Thickness', 'b2', 5),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfmpcade', 'Flange Thickness', 'b3', 6),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfmpcade', 'Flange Thickness', 'b4', 7),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfmpcade', 'Web Thickness', 't5', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfmpcade', 'Web Off Center', 'b1-b2/2', 8),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfmpcade', 'Web Off Center', 'b3-b4/2', 9),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfmpcade', 'Radius', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfmpcade', 'CoW', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfmpcade', 'OS', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-wfmpcade', 'Unit Weight (Kgm)', '', 0);