-- Template h-beam 
INSERT INTO `qc_template` (`qc_template_id`, `prodtype_id`, `size_id`, `profile`, `std_dimention`, `brand_merek`, `specification`, `name`, `status`, `created_by`, `created_dt`, `updated_by`, `updated_dt`) VALUES
('TMP-rtxtuzz', 'H-BEAM', 'HB 498X432X45X70', 'HB 498X432X45X70', '498X432X45X70', 'H-BEAM 498X432X45X70', 'HB 498X432X45X70', 'Template HB 498X432X45X70', 'active', 'Akun Testing Manajer', '2025-11-04 16:16:53', 'Akun Testing Manajer', '2025-11-04 16:16:53');

INSERT INTO `qc_template_data` (`input_code`, `qc_template_id`, `label`, `input_type`, `min_tolerance`, `t_lt_50_tolerance`, `nominal_tolerance`, `t_gt_50_tolerance`, `max_tolerance`, `actual_tolerance`, `order_numb`, `enabled`, `sound`, `position`, `group_name`) VALUES
-- H-Top (1-3)
('H.H-top','TMP-rtxtuzz','H(H-top)','number',495,496.5,498,499.5,501,NULL,1,1,'','H-Top','table'),
('C.H-top','TMP-rtxtuzz','C(H-top)','number',495,496.5,498,499.5,501,NULL,2,1,'','H-Top','table'),
('T.H-top','TMP-rtxtuzz','T(H-top)','number',495,496.5,498,499.5,501,NULL,3,1,'','H-Top','table'),

-- H-Center (4-6)
('H.H-center','TMP-rtxtuzz','H(H-center)','number',495,496.5,498,499.5,501,NULL,4,1,'','H-Center','table'),
('C.H-center','TMP-rtxtuzz','C(H-center)','number',495,496.5,498,499.5,501,NULL,5,1,'','H-Center','table'),
('T.H-center','TMP-rtxtuzz','T(H-center)','number',495,496.5,498,499.5,501,NULL,6,1,'','H-Center','table'),

-- H-Bottom (7-9)
('H.H-bottom','TMP-rtxtuzz','H(H-bottom)','number',495,496.5,498,499.5,501,NULL,7,1,'','H-Bottom','table'),
('C.H-bottom','TMP-rtxtuzz','C(H-bottom)','number',495,496.5,498,499.5,501,NULL,8,1,'','H-Bottom','table'),
('T.H-bottom','TMP-rtxtuzz','T(H-bottom)','number',495,496.5,498,499.5,501,NULL,9,1,'','H-Bottom','table'),

-- B1 (10-12)
('H.B1','TMP-rtxtuzz','H(B1)','number',429,430.5,432,433.5,435,NULL,10,1,'','B1','table'),
('C.B1','TMP-rtxtuzz','C(B1)','number',429,430.5,432,433.5,435,NULL,11,1,'','B1','table'),
('T.B1','TMP-rtxtuzz','T(B1)','number',429,430.5,432,433.5,435,NULL,12,1,'','B1','table'),

-- B2 (13-15)
('H.B2','TMP-rtxtuzz','H(B2)','number',429,430.5,432,433.5,435,NULL,13,1,'','B2','table'),
('C.B2','TMP-rtxtuzz','C(B2)','number',429,430.5,432,433.5,435,NULL,14,1,'','B2','table'),
('T.B2','TMP-rtxtuzz','T(B2)','number',429,430.5,432,433.5,435,NULL,15,1,'','B2','table'),

-- t1 (16-18)
('H.t1','TMP-rtxtuzz','H(t1)','number',68,69,70,71,72,NULL,16,1,'','t1','table'),
('C.t1','TMP-rtxtuzz','C(t1)','number',68,69,70,71,72,NULL,17,1,'','t1','table'),
('T.t1','TMP-rtxtuzz','T(t1)','number',68,69,70,71,72,NULL,18,1,'','t1','table'),

-- t2 (19-21)
('H.t2','TMP-rtxtuzz','H(t2)','number',68,69,70,71,72,NULL,19,1,'','t2','table'),
('C.t2','TMP-rtxtuzz','C(t2)','number',68,69,70,71,72,NULL,20,1,'','t2','table'),
('T.t2','TMP-rtxtuzz','T(t2)','number',68,69,70,71,72,NULL,21,1,'','t2','table'),

-- t3 (22-24)
('H.t3','TMP-rtxtuzz','H(t3)','number',68,69,70,71,72,NULL,22,1,'','t3','table'),
('C.t3','TMP-rtxtuzz','C(t3)','number',68,69,70,71,72,NULL,23,1,'','t3','table'),
('T.t3','TMP-rtxtuzz','T(t3)','number',68,69,70,71,72,NULL,24,1,'','t3','table'),

-- t4 (25-27)
('H.t4','TMP-rtxtuzz','H(t4)','number',68,69,70,71,72,NULL,25,1,'','t4','table'),
('C.t4','TMP-rtxtuzz','C(t4)','number',68,69,70,71,72,NULL,26,1,'','t4','table'),
('T.t4','TMP-rtxtuzz','T(t4)','number',68,69,70,71,72,NULL,27,1,'','t4','table'),

-- t5 (28-30)
('H.t5','TMP-rtxtuzz','H(t5)','number',43,44,45,46,47,NULL,28,1,'','t5','table'),
('C.t5','TMP-rtxtuzz','C(t5)','number',43,44,45,46,47,NULL,29,1,'','t5','table'),
('T.t5','TMP-rtxtuzz','T(t5)','number',43,44,45,46,47,NULL,30,1,'','t5','table'),

-- b1 (31-33)
('H.b1','TMP-rtxtuzz','H(b1)','number',68,69,70,71,72,NULL,31,1,'','b1','table'),
('C.b1','TMP-rtxtuzz','C(b1)','number',68,69,70,71,72,NULL,32,1,'','b1','table'),
('T.b1','TMP-rtxtuzz','T(b1)','number',68,69,70,71,72,NULL,33,1,'','b1','table'),

-- b3 (34-36)
('H.b3','TMP-rtxtuzz','H(b3)','number',68,69,70,71,72,NULL,34,1,'','b3','table'),
('C.b3','TMP-rtxtuzz','C(b3)','number',68,69,70,71,72,NULL,35,1,'','b3','table'),
('T.b3','TMP-rtxtuzz','T(b3)','number',68,69,70,71,72,NULL,36,1,'','b3','table'),

-- b2 (37-39)
('H.b2','TMP-rtxtuzz','H(b2)','number',68,69,70,71,72,NULL,37,1,'','b2','table'),
('C.b2','TMP-rtxtuzz','C(b2)','number',68,69,70,71,72,NULL,38,1,'','b2','table'),
('T.b2','TMP-rtxtuzz','T(b2)','number',68,69,70,71,72,NULL,39,1,'','b2','table'),

-- b4 (40-42)
('H.b4','TMP-rtxtuzz','H(b4)','number',68,69,70,71,72,NULL,40,1,'','b4','table'),
('C.b4','TMP-rtxtuzz','C(b4)','number',68,69,70,71,72,NULL,41,1,'','b4','table'),
('T.b4','TMP-rtxtuzz','T(b4)','number',68,69,70,71,72,NULL,42,1,'','b4','table'),

-- b1-b2/2 (43–45)
('H.b1-b2/2','TMP-rtxtuzz','H(b1-b2/2)','number',-3.5, -1.75, 0, 1.75, 3.5, NULL, 43, 1, '', 'b1-b2/2', 'table'),
('C.b1-b2/2','TMP-rtxtuzz','C(b1-b2/2)','number',-3.5, -1.75, 0, 1.75, 3.5, NULL, 44, 1, '', 'b1-b2/2', 'table'),
('T.b1-b2/2','TMP-rtxtuzz','T(b1-b2/2)','number',-3.5, -1.75, 0, 1.75, 3.5, NULL, 45, 1, '', 'b1-b2/2', 'table'),

-- b3-b4/2 (46–48)
('H.b3-b4/2','TMP-rtxtuzz','H(b3-b4/2)','number',-3.5, -1.75, 0, 1.75, 3.5, NULL, 46, 1, '', 'b3-b4/2', 'table'),
('C.b3-b4/2','TMP-rtxtuzz','C(b3-b4/2)','number',-3.5, -1.75, 0, 1.75, 3.5, NULL, 47, 1, '', 'b3-b4/2', 'table'),
('T.b3-b4/2','TMP-rtxtuzz','T(b3-b4/2)','number',-3.5, -1.75, 0, 1.75, 3.5, NULL, 48, 1, '', 'b3-b4/2', 'table'),

-- FormRight (49-57) - Tetap sama
('height.of.flange','TMP-rtxtuzz','Height of Flange','number',429,430.5,432,433.5,435,0,49,1,'','FormRight','Height of Flange'),
('flange.thickness','TMP-rtxtuzz','Flange Thickness','number',68,69,70,71,72,0,50,1,'','FormRight','Flange Thickness'),
('width.of.web','TMP-rtxtuzz','Width of Web','number',495,496.5,498,499.5,501,0,51,1,'','FormRight','Width of Web'),
('web.thickness','TMP-rtxtuzz','Web Thickness','number',43,44,45,46,47,0,52,1,'','FormRight','Web Thickness'),
('unit.weight','TMP-rtxtuzz','Unit Weight (Kgm)','number',580.8,592.9,605,617.1,629.2,0,53,1,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-rtxtuzz','Radius','number',0,0,22,0,0,0,54,1,'','FormRight','Radius'),
('web.off.center','TMP-rtxtuzz','Web Off Center','number',-3.5, -1.75, 0, 1.75, 3.5,0, 55, 1, '', 'FormRight', 'Web Off Center'),
('os','TMP-rtxtuzz','OS','number',0,0,5.18,0,0,0,56,1,'','FormRight','OS'),
('cow','TMP-rtxtuzz','CoW','number',0,0,0,0,0,2.5,57,1,'','FormRight','CoW');

INSERT INTO `qc_template_mapping` (`mapping_id`, `qc_template_id`, `group_name`, `position`, `order_numb`) VALUES
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzz', 'Flange Thickness', 't4', 3),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzz', 'Width of Web', 'H-Center', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzz', 'Flange Thickness', 'b1', 4),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzz', 'Flange Thickness', 't1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzz', 'Width of Web', 'H-Bottom', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzz', 'Flange Thickness', 'b2', 5),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzz', 'Flange Thickness', 'b3', 6),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzz', 'Width of Web', 'H-Top', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzz', 'Flange Thickness', 'b4', 7),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzz', 'Flange Thickness', 't2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzz', 'Height of Flange', 'B2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzz', 'OS', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzz', 'Flange Thickness', 't3', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzz', 'Radius', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzz', 'Unit Weight (Kgm)', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzz', 'Height of Flange', 'B1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzz', 'CoW', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzz', 'Web Thickness', 't5', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzz', 'Web Off Center', 'b1-b2/2', 8),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxtuzz', 'Web Off Center', 'b3-b4/2', 9);