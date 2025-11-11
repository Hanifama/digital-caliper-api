-- Template h-beam 
INSERT INTO `qc_template` (`qc_template_id`, `prodtype_id`, `size_id`, `profile`, `std_dimention`, `brand_merek`, `specification`, `name`, `status`, `created_by`, `created_dt`, `updated_by`, `updated_dt`) VALUES
('TMP-rtxfdzb', 'H-BEAM', 'HB 350X350X12X19', 'HB 350X350X12X19', '350X350X12X19', 'H-BEAM 350X350X12X19', 'HB 350X350X12X19', 'Template HB 350X350X12X19', 'active', 'Akun Testing Manajer', '2025-11-04 16:16:53', 'Akun Testing Manajer', '2025-11-04 16:16:53');

INSERT INTO `qc_template_data` (`input_code`, `qc_template_id`, `label`, `input_type`, `min_tolerance`, `t_lt_50_tolerance`, `nominal_tolerance`, `t_gt_50_tolerance`, `max_tolerance`, `actual_tolerance`, `order_numb`, `enabled`, `sound`, `position`, `group_name`) VALUES
-- H-Top (1-3)
('H.H-top','TMP-rtxfdzb','H(H-top)','number',348,349,350,351,352,NULL,1,1,'','H-Top','table'),
('C.H-top','TMP-rtxfdzb','C(H-top)','number',348,349,350,351,352,NULL,2,1,'','H-Top','table'),
('T.H-top','TMP-rtxfdzb','T(H-top)','number',348,349,350,351,352,NULL,3,1,'','H-Top','table'),

-- H-Center (4-6)
('H.H-center','TMP-rtxfdzb','H(H-center)','number',348,349,350,351,352,NULL,4,1,'','H-Center','table'),
('C.H-center','TMP-rtxfdzb','C(H-center)','number',348,349,350,351,352,NULL,5,1,'','H-Center','table'),
('T.H-center','TMP-rtxfdzb','T(H-center)','number',348,349,350,351,352,NULL,6,1,'','H-Center','table'),

-- H-Bottom (7-9)
('H.H-bottom','TMP-rtxfdzb','H(H-bottom)','number',348,349,350,351,352,NULL,7,1,'','H-Bottom','table'),
('C.H-bottom','TMP-rtxfdzb','C(H-bottom)','number',348,349,350,351,352,NULL,8,1,'','H-Bottom','table'),
('T.H-bottom','TMP-rtxfdzb','T(H-bottom)','number',348,349,350,351,352,NULL,9,1,'','H-Bottom','table'),

-- B1 (10-12)
('H.B1','TMP-rtxfdzb','H(B1)','number',347,348.5,350,351.5,353,NULL,10,1,'','B1','table'),
('C.B1','TMP-rtxfdzb','C(B1)','number',347,348.5,350,351.5,353,NULL,11,1,'','B1','table'),
('T.B1','TMP-rtxfdzb','T(B1)','number',347,348.5,350,351.5,353,NULL,12,1,'','B1','table'),

-- B2 (13-15)
('H.B2','TMP-rtxfdzb','H(B2)','number',347,348.5,350,351.5,353,NULL,13,1,'','B2','table'),
('C.B2','TMP-rtxfdzb','C(B2)','number',347,348.5,350,351.5,353,NULL,14,1,'','B2','table'),
('T.B2','TMP-rtxfdzb','T(B2)','number',347,348.5,350,351.5,353,NULL,15,1,'','B2','table'),

-- t1 (16-18)
('H.t1','TMP-rtxfdzb','H(t1)','number',11.3,11.65,12,12.35,12.7,NULL,16,1,'','t1','table'),
('C.t1','TMP-rtxfdzb','C(t1)','number',11.3,11.65,12,12.35,12.7,NULL,17,1,'','t1','table'),
('T.t1','TMP-rtxfdzb','T(t1)','number',11.3,11.65,12,12.35,12.7,NULL,18,1,'','t1','table'),

-- t2 (19-21)
('H.t2','TMP-rtxfdzb','H(t2)','number',11.3,11.65,12,12.35,12.7,NULL,19,1,'','t2','table'),
('C.t2','TMP-rtxfdzb','C(t2)','number',11.3,11.65,12,12.35,12.7,NULL,20,1,'','t2','table'),
('T.t2','TMP-rtxfdzb','T(t2)','number',11.3,11.65,12,12.35,12.7,NULL,21,1,'','t2','table'),

-- t3 (22-24)
('H.t3','TMP-rtxfdzb','H(t3)','number',11.3,11.65,12,12.35,12.7,NULL,22,1,'','t3','table'),
('C.t3','TMP-rtxfdzb','C(t3)','number',11.3,11.65,12,12.35,12.7,NULL,23,1,'','t3','table'),
('T.t3','TMP-rtxfdzb','T(t3)','number',11.3,11.65,12,12.35,12.7,NULL,24,1,'','t3','table'),

-- t4 (25-27)
('H.t4','TMP-rtxfdzb','H(t4)','number',11.3,11.65,12,12.35,12.7,NULL,25,1,'','t4','table'),
('C.t4','TMP-rtxfdzb','C(t4)','number',11.3,11.65,12,12.35,12.7,NULL,26,1,'','t4','table'),
('T.t4','TMP-rtxfdzb','T(t4)','number',11.3,11.65,12,12.35,12.7,NULL,27,1,'','t4','table'),

-- t5 (28-30)
('H.t5','TMP-rtxfdzb','H(t5)','number',11.3,11.65,12,12.35,12.7,NULL,28,1,'','t5','table'),
('C.t5','TMP-rtxfdzb','C(t5)','number',11.3,11.65,12,12.35,12.7,NULL,29,1,'','t5','table'),
('T.t5','TMP-rtxfdzb','T(t5)','number',11.3,11.65,12,12.35,12.7,NULL,30,1,'','t5','table'),

-- b1 (31-33)
('H.b1','TMP-rtxfdzb','H(b1)','number',17.5,18.25,19,19.75,20.5,NULL,31,1,'','b1','table'),
('C.b1','TMP-rtxfdzb','C(b1)','number',17.5,18.25,19,19.75,20.5,NULL,32,1,'','b1','table'),
('T.b1','TMP-rtxfdzb','T(b1)','number',17.5,18.25,19,19.75,20.5,NULL,33,1,'','b1','table'),

-- b3 (34-36)
('H.b3','TMP-rtxfdzb','H(b3)','number',17.5,18.25,19,19.75,20.5,NULL,34,1,'','b3','table'),
('C.b3','TMP-rtxfdzb','C(b3)','number',17.5,18.25,19,19.75,20.5,NULL,35,1,'','b3','table'),
('T.b3','TMP-rtxfdzb','T(b3)','number',17.5,18.25,19,19.75,20.5,NULL,36,1,'','b3','table'),

-- b2 (37-39)
('H.b2','TMP-rtxfdzb','H(b2)','number',17.5,18.25,19,19.75,20.5,NULL,37,1,'','b2','table'),
('C.b2','TMP-rtxfdzb','C(b2)','number',17.5,18.25,19,19.75,20.5,NULL,38,1,'','b2','table'),
('T.b2','TMP-rtxfdzb','T(b2)','number',17.5,18.25,19,19.75,20.5,NULL,39,1,'','b2','table'),

-- b4 (40-42)
('H.b4','TMP-rtxfdzb','H(b4)','number',17.5,18.25,19,19.75,20.5,NULL,40,1,'','b4','table'),
('C.b4','TMP-rtxfdzb','C(b4)','number',17.5,18.25,19,19.75,20.5,NULL,41,1,'','b4','table'),
('T.b4','TMP-rtxfdzb','T(b4)','number',17.5,18.25,19,19.75,20.5,NULL,42,1,'','b4','table'),

-- b1-b2/2 (43–45)
('H.b1-b2/2','TMP-rtxfdzb','H(b1-b2/2)','number',-3.5, -1.75, 0, 1.75, 3.5, NULL, 43, 1, '', 'b1-b2/2', 'table'),
('C.b1-b2/2','TMP-rtxfdzb','C(b1-b2/2)','number',-3.5, -1.75, 0, 1.75, 3.5, NULL, 44, 1, '', 'b1-b2/2', 'table'),
('T.b1-b2/2','TMP-rtxfdzb','T(b1-b2/2)','number',-3.5, -1.75, 0, 1.75, 3.5, NULL, 45, 1, '', 'b1-b2/2', 'table'),

-- b3-b4/2 (46–48)
('H.b3-b4/2','TMP-rtxfdzb','H(b3-b4/2)','number',-3.5, -1.75, 0, 1.75, 3.5, NULL, 46, 1, '', 'b3-b4/2', 'table'),
('C.b3-b4/2','TMP-rtxfdzb','C(b3-b4/2)','number',-3.5, -1.75, 0, 1.75, 3.5, NULL, 47, 1, '', 'b3-b4/2', 'table'),
('T.b3-b4/2','TMP-rtxfdzb','T(b3-b4/2)','number',-3.5, -1.75, 0, 1.75, 3.5, NULL, 48, 1, '', 'b3-b4/2', 'table'),

-- FormRight (49-57) - Tetap sama
('height.of.flange','TMP-rtxfdzb','Height of Flange','number',347,348.5,350,351.5,353,0,49,1,'','FormRight','Height of Flange'),
('flange.thickness','TMP-rtxfdzb','Flange Thickness','number',17.5,18.25,19,19.75,20.5,0,50,1,'','FormRight','Flange Thickness'),
('width.of.web','TMP-rtxfdzb','Width of Web','number',348,349,350,351,352,0,51,1,'','FormRight','Width of Web'),
('web.thickness','TMP-rtxfdzb','Web Thickness','number',11.3,11.65,12,12.35,12.7,0,52,1,'','FormRight','Web Thickness'),
('unit.weight','TMP-rtxfdzb','Unit Weight (Kgm)','number',129.6,132.3,135,137.7,140.4,0,53,1,'','FormRight','Unit Weight (Kgm)'),
('radius','TMP-rtxfdzb','Radius','number',0,0,13,0,0,0,54,1,'','FormRight','Radius'),
('web.off.center','TMP-rtxfdzb','Web Off Center','number',-3.5, -1.75, 0, 1.75, 3.5,0, 55, 1, '', 'FormRight', 'Web Off Center'),
('os','TMP-rtxfdzb','OS','number',0,0,4.20,0,0,0,56,1,'','FormRight','OS'),
('cow','TMP-rtxfdzb','CoW','number',0,0,0,0,0,2,57,1,'','FormRight','CoW');

INSERT INTO `qc_template_mapping` (`mapping_id`, `qc_template_id`, `group_name`, `position`, `order_numb`) VALUES
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxfdzb', 'Flange Thickness', 't4', 3),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxfdzb', 'Width of Web', 'H-Center', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxfdzb', 'Flange Thickness', 'b1', 4),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxfdzb', 'Flange Thickness', 't1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxfdzb', 'Width of Web', 'H-Bottom', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxfdzb', 'Flange Thickness', 'b2', 5),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxfdzb', 'Flange Thickness', 'b3', 6),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxfdzb', 'Width of Web', 'H-Top', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxfdzb', 'Flange Thickness', 'b4', 7),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxfdzb', 'Flange Thickness', 't2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxfdzb', 'Height of Flange', 'B2', 1),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxfdzb', 'OS', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxfdzb', 'Flange Thickness', 't3', 2),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxfdzb', 'Radius', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxfdzb', 'Unit Weight (Kgm)', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxfdzb', 'Height of Flange', 'B1', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxfdzb', 'CoW', '', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxfdzb', 'Web Thickness', 't5', 0),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxfdzb', 'Web Off Center', 'b1-b2/2', 8),
(CONCAT('MAP', LEFT(UUID(),8)), 'TMP-rtxfdzb', 'Web Off Center', 'b3-b4/2', 9);