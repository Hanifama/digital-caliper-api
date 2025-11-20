-- Template h-beam 
INSERT INTO `qc_template` (`qc_template_id`, `prodtype_id`, `size_id`, `profile`, `std_dimention`, `brand_merek`, `specification`, `name`, `status`, `created_by`, `created_dt`, `updated_by`, `updated_dt`) VALUES
('TMP-rtxtuyx', 'H-BEAM', 'HB 294X302X12X12', 'HB 294X302X12X12', '294X302X12X12', 'H-BEAM 294X302X12X12', 'HB 294X302X12X12', 'Template HB 294X302X12X12', 'active', 'Akun Testing Manajer', '2025-11-04 16:16:53', 'Akun Testing Manajer', '2025-11-04 16:16:53');

INSERT INTO `qc_template_data` (`input_code`, `qc_template_id`, `label`, `input_type`, `min_tolerance`, `t_lt_50_tolerance`, `nominal_tolerance`, `t_gt_50_tolerance`, `max_tolerance`, `actual_tolerance`, `order_numb`, `enabled`, `sound`, `position`, `group_name`) VALUES
-- H-Top (1-3)
('H.H-top','TMP-rtxtuyx','H(H-top)','number',292,293,294,295,296,NULL,1,1,'','H-Top','table'),
('C.H-top','TMP-rtxtuyx','C(H-top)','number',292,293,294,295,296,NULL,2,1,'','H-Top','table'),
('T.H-top','TMP-rtxtuyx','T(H-top)','number',292,293,294,295,296,NULL,3,1,'','H-Top','table'),

-- H-Bottom (4-6)
('H.H-bottom','TMP-rtxtuyx','H(H-bottom)','number',292,293,294,295,296,NULL,4,1,'','H-Bottom','table'),
('C.H-bottom','TMP-rtxtuyx','C(H-bottom)','number',292,293,294,295,296,NULL,5,1,'','H-Bottom','table'),
('T.H-bottom','TMP-rtxtuyx','T(H-bottom)','number',292,293,294,295,296,NULL,6,1,'','H-Bottom','table'),

-- B1 (7-9)
('H.B1','TMP-rtxtuyx','H(B1)','number',299,300.5,302,303.5,305,NULL,7,1,'','B1','table'),
('C.B1','TMP-rtxtuyx','C(B1)','number',299,300.5,302,303.5,305,NULL,8,1,'','B1','table'),
('T.B1','TMP-rtxtuyx','T(B1)','number',299,300.5,302,303.5,305,NULL,9,1,'','B1','table'),

-- B2 (10-12)
('H.B2','TMP-rtxtuyx','H(B2)','number',299,300.5,302,303.5,305,NULL,10,1,'','B2','table'),
('C.B2','TMP-rtxtuyx','C(B2)','number',299,300.5,302,303.5,305,NULL,11,1,'','B2','table'),
('T.B2','TMP-rtxtuyx','T(B2)','number',299,300.5,302,303.5,305,NULL,12,1,'','B2','table'),

-- t1 (13-15)
('H.t1','TMP-rtxtuyx','H(t1)','number',11,11.5,12,12.5,13,NULL,13,1,'','t1','table'),
('C.t1','TMP-rtxtuyx','C(t1)','number',11,11.5,12,12.5,13,NULL,14,1,'','t1','table'),
('T.t1','TMP-rtxtuyx','T(t1)','number',11,11.5,12,12.5,13,NULL,15,1,'','t1','table'),

-- t2 (16-18)
('H.t2','TMP-rtxtuyx','H(t2)','number',11,11.5,12,12.5,13,NULL,16,1,'','t2','table'),
('C.t2','TMP-rtxtuyx','C(t2)','number',11,11.5,12,12.5,13,NULL,17,1,'','t2','table'),
('T.t2','TMP-rtxtuyx','T(t2)','number',11,11.5,12,12.5,13,NULL,18,1,'','t2','table'),

-- t3 (19-21)
('H.t3','TMP-rtxtuyx','H(t3)','number',11,11.5,12,12.5,13,NULL,19,1,'','t3','table'),
('C.t3','TMP-rtxtuyx','C(t3)','number',11,11.5,12,12.5,13,NULL,20,1,'','t3','table'),
('T.t3','TMP-rtxtuyx','T(t3)','number',11,11.5,12,12.5,13,NULL,21,1,'','t3','table'),

-- t4 (22-24)
('H.t4','TMP-rtxtuyx','H(t4)','number',11,11.5,12,12.5,13,NULL,22,1,'','t4','table'),
('C.t4','TMP-rtxtuyx','C(t4)','number',11,11.5,12,12.5,13,NULL,23,1,'','t4','table'),
('T.t4','TMP-rtxtuyx','T(t4)','number',11,11.5,12,12.5,13,NULL,24,1,'','t4','table'),

-- t5 (25-27)
('H.t5','TMP-rtxtuyx','H(t5)','number',11.3,11.65,12,12.35,12.7,NULL,25,1,'','t5','table'),
('C.t5','TMP-rtxtuyx','C(t5)','number',11.3,11.65,12,12.35,12.7,NULL,26,1,'','t5','table'),
('T.t5','TMP-rtxtuyx','T(t5)','number',11.3,11.65,12,12.35,12.7,NULL,27,1,'','t5','table'),

-- b1 (28-30)
('H.b1','TMP-rtxtuyx','H(b1)','number',11,11.5,12,12.5,13,NULL,28,1,'','b1','table'),
('C.b1','TMP-rtxtuyx','C(b1)','number',11,11.5,12,12.5,13,NULL,29,1,'','b1','table'),
('T.b1','TMP-rtxtuyx','T(b1)','number',11,11.5,12,12.5,13,NULL,30,1,'','b1','table'),

-- b3 (31-33)
('H.b3','TMP-rtxtuyx','H(b3)','number',11,11.5,12,12.5,13,NULL,31,1,'','b3','table'),
('C.b3','TMP-rtxtuyx','C(b3)','number',11,11.5,12,12.5,13,NULL,32,1,'','b3','table'),
('T.b3','TMP-rtxtuyx','T(b3)','number',11,11.5,12,12.5,13,NULL,33,1,'','b3','table'),

-- b2 (34-36)
('H.b2','TMP-rtxtuyx','H(b2)','number',11,11.5,12,12.5,13,NULL,34,1,'','b2','table'),
('C.b2','TMP-rtxtuyx','C(b2)','number',11,11.5,12,12.5,13,NULL,35,1,'','b2','table'),
('T.b2','TMP-rtxtuyx','T(b2)','number',11,11.5,12,12.5,13,NULL,36,1,'','b2','table'),

-- b4 (37-39)
('H.b4','TMP-rtxtuyx','H(b4)','number',11,11.5,12,12.5,13,NULL,37,1,'','b4','table'),
('C.b4','TMP-rtxtuyx','C(b4)','number',11,11.5,12,12.5,13,NULL,38,1,'','b4','table'),
('T.b4','TMP-rtxtuyx','T(b4)','number',11,11.5,12,12.5,13,NULL,39,1,'','b4','table'),

-- b1-b2/2 (40-42)
('H.b1-b2/2','TMP-rtxtuyx','H(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,40,1,'','b1-b2/2','table'),
('C.b1-b2/2','TMP-rtxtuyx','C(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,41,1,'','b1-b2/2','table'),
('T.b1-b2/2','TMP-rtxtuyx','T(b1-b2/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,42,1,'','b1-b2/2','table'),

-- b3-b4/2 (43-45)
('H.b3-b4/2','TMP-rtxtuyx','H(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,43,1,'','b3-b4/2','table'),
('C.b3-b4/2','TMP-rtxtuyx','C(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,44,1,'','b3-b4/2','table'),
('T.b3-b4/2','TMP-rtxtuyx','T(b3-b4/2)','number',-2.5,-1.25,0,1.25,2.5,NULL,45,1,'','b3-b4/2','table'),

-- FormRight (46-54)
('height.of.flange','TMP-rtxtuyx','Height of Flange','number',299,300.5,302,303.5,305,0,46,1,'','FormRight','Height of Flange'),
('flange.thickness','TMP-rtxtuyx','Flange Thickness','number',11,11.5,12,12.5,13,0,47,1,'','FormRight','Flange Thickness'),
('width.of.web','TMP-rtxtuyx','Width of Web','number',292,293,294,295,296,0,48,1,'','FormRight','Width of Web'),
('web.thickness','TMP-rtxtuyx','Web Thickness','number',11.3,11.65,12,12.35,12.7,0,49,1,'','FormRight','Web Thickness'),
('unit.weight','TMP-rtxtuyx','Unit Weight (Kgm)','number',80.1,81.75,83.4,85.05,86.7,0,50,1,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-rtxtuyx','Radius','number',0,0,13,0,0,0,51,1,'','FormRight','Radius'),
('web.off.center','TMP-rtxtuyx','Web Off Center','number',-2.5,-1.25,0,1.25,2.5,0,52,1,'','FormRight','Web Off Center'),
('os','TMP-rtxtuyx','OS','number',0,0,3.02,0,0,0,53,1,'','FormRight','OS'),
('cow','TMP-rtxtuyx','CoW','number',0,0,0,0,0,2,54,1,'','FormRight','CoW');

INSERT INTO `qc_template_mapping` (`mapping_id`, `qc_template_id`, `group_name`, `position`, `order_numb`) VALUES
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyx', 'Width of Web', 'H-Bottom', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyx', 'Flange Thickness', 't4', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyx', 'Flange Thickness', 'b1', 3),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyx', 'Flange Thickness', 't1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyx', 'Flange Thickness', 'b2', 4),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyx', 'Flange Thickness', 'b3', 5),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyx', 'Width of Web', 'H-Top', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyx', 'Flange Thickness', 'b4', 6),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyx', 'Flange Thickness', 't2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyx', 'Height of Flange', 'B2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyx', 'OS', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyx', 'Flange Thickness', 't3', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyx', 'Radius', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyx', 'Unit Weight (Kgm)', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyx', 'Height of Flange', 'B1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyx', 'CoW', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyx', 'Web Thickness', 't5', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyx', 'Web Off Center', 'b1-b2/2', 7),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuyx', 'Web Off Center', 'b3-b4/2', 8);