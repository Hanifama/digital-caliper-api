INSERT INTO product_type_data 
(code, prodtype_id, label, alias, type, is_readonly, position, status, is_formula, formula, is_tolerance)
VALUES

-- Posisi H-top
('H.H-top', 'WF-BEAM', 'H(H-top)', 'Lebar Web Atas', 'number', false, 'H-Top', 'active', false, NULL, true),
('C.H-top', 'WF-BEAM', 'C(H-top)', 'Lebar Web Atas', 'number', false, 'H-Top', 'active', false, NULL, true),
('T.H-top', 'WF-BEAM', 'T(H-top)', 'Lebar Web Atas', 'number', false, 'H-Top', 'active', false, NULL, true),

-- Posisi H-bottom
('H.H-bottom', 'WF-BEAM', 'H(H-bottom)', 'Lebar Web Bawah', 'number', false, 'H-Bottom', 'active', false, NULL, true),
('C.H-bottom', 'WF-BEAM', 'C(H-bottom)', 'Lebar Web Bawah', 'number', false, 'H-Bottom', 'active', false, NULL, true),
('T.H-bottom', 'WF-BEAM', 'T(H-bottom)', 'Lebar Web Bawah', 'number', false, 'H-Bottom', 'active', false, NULL, true),

-- Posisi B1
('H.B1', 'WF-BEAM', 'H(B1)', 'Tinggi Flange Kiri', 'number', false, 'B1', 'active', false, NULL, true),
('C.B1', 'WF-BEAM', 'C(B1)', 'Tinggi Flange Kiri', 'number', false, 'B1', 'active', false, NULL, true),
('T.B1', 'WF-BEAM', 'T(B1)', 'Tinggi Flange Kiri', 'number', false, 'B1', 'active', false, NULL, true),

-- Posisi B2
('H.B2', 'WF-BEAM', 'H(B2)', 'Tinggi Flange Kanan', 'number', false, 'B2', 'active', false, NULL, true),
('C.B2', 'WF-BEAM', 'C(B2)', 'Tinggi Flange Kanan', 'number', false, 'B2', 'active', false, NULL, true),
('T.B2', 'WF-BEAM', 'T(B2)', 'Tinggi Flange Kanan', 'number', false, 'B2', 'active', false, NULL, true),

-- Posisi t1
('H.t1', 'WF-BEAM', 'H(t1)', 'Tebal Flange Kiri Atas', 'number', false, 't1', 'active', false, NULL, true),
('C.t1', 'WF-BEAM', 'C(t1)', 'Tebal Flange Kiri Atas', 'number', false, 't1', 'active', false, NULL, true),
('T.t1', 'WF-BEAM', 'T(t1)', 'Tebal Flange Kiri Atas', 'number', false, 't1', 'active', false, NULL, true),

-- Posisi t2
('H.t2', 'WF-BEAM', 'H(t2)', 'Tebal Flange Kiri Bawah', 'number', false, 't2', 'active', false, NULL, true),
('C.t2', 'WF-BEAM', 'C(t2)', 'Tebal Flange Kiri Bawah', 'number', false, 't2', 'active', false, NULL, true),
('T.t2', 'WF-BEAM', 'T(t2)', 'Tebal Flange Kiri Bawah', 'number', false, 't2', 'active', false, NULL, true),

-- Posisi t3
('H.t3', 'WF-BEAM', 'H(t3)', 'Tebal Flange Kanan Atas', 'number', false, 't3', 'active', false, NULL, true),
('C.t3', 'WF-BEAM', 'C(t3)', 'Tebal Flange Kanan Atas', 'number', false, 't3', 'active', false, NULL, true),
('T.t3', 'WF-BEAM', 'T(t3)', 'Tebal Flange Kanan Atas', 'number', false, 't3', 'active', false, NULL, true),

-- Posisi t4
('H.t4', 'WF-BEAM', 'H(t4)', 'Tebal Flange Kanan Bawah', 'number', false, 't4', 'active', false, NULL, true),
('C.t4', 'WF-BEAM', 'C(t4)', 'Tebal Flange Kanan Bawah', 'number', false, 't4', 'active', false, NULL, true),
('T.t4', 'WF-BEAM', 'T(t4)', 'Tebal Flange Kanan Bawah', 'number', false, 't4', 'active', false, NULL, true),

-- Posisi t5
('H.t5', 'WF-BEAM', 'H(t5)', 'Tebal Web', 'number', false, 't5', 'active', false, NULL, true),
('C.t5', 'WF-BEAM', 'C(t5)', 'Tebal Web', 'number', false, 't5', 'active', false, NULL, true),
('T.t5', 'WF-BEAM', 'T(t5)', 'Tebal Web', 'number', false, 't5', 'active', false, NULL, true),

-- Posisi t6
('H.t6', 'WF-BEAM', 'H(t6)', 'Tebal Web', 'number', false, 't6', 'active', false, NULL, true),
('C.t6', 'WF-BEAM', 'C(t6)', 'Tebal Web', 'number', false, 't6', 'active', false, NULL, true),
('T.t6', 'WF-BEAM', 'T(t6)', 'Tebal Web', 'number', false, 't6', 'active', false, NULL, true),

-- Posisi t7
('H.t7', 'WF-BEAM', 'H(t7)', 'Tebal Web', 'number', false, 't7', 'active', false, NULL, true),
('C.t7', 'WF-BEAM', 'C(t7)', 'Tebal Web', 'number', false, 't7', 'active', false, NULL, true),
('T.t7', 'WF-BEAM', 'T(t7)', 'Tebal Web', 'number', false, 't7', 'active', false, NULL, true),

-- Posisi b1 (TOLERANSI)
('H.b1', 'WF-BEAM', 'H(b1)', NULL, 'number', false, 'b1', 'active', false, NULL, false),
('C.b1', 'WF-BEAM', 'C(b1)', NULL, 'number', false, 'b1', 'active', false, NULL, false),
('T.b1', 'WF-BEAM', 'T(b1)', NULL, 'number', false, 'b1', 'active', false, NULL, false),

-- Posisi b2 (TOLERANSI)
('H.b2', 'WF-BEAM', 'H(b2)', NULL, 'number', false, 'b2', 'active', false, NULL, false),
('C.b2', 'WF-BEAM', 'C(b2)', NULL, 'number', false, 'b2', 'active', false, NULL, false),
('T.b2', 'WF-BEAM', 'T(b2)', NULL, 'number', false, 'b2', 'active', false, NULL, false),

-- Posisi b3 (TOLERANSI)
('H.b3', 'WF-BEAM', 'H(b3)', NULL, 'number', false, 'b3', 'active', false, NULL, false),
('C.b3', 'WF-BEAM', 'C(b3)', NULL, 'number', false, 'b3', 'active', false, NULL, false),
('T.b3', 'WF-BEAM', 'T(b3)', NULL, 'number', false, 'b3', 'active', false, NULL, false),

-- Posisi b4 (TOLERANSI)
('H.b4', 'WF-BEAM', 'H(b4)', NULL, 'number', false, 'b4', 'active', false, NULL, false),
('C.b4', 'WF-BEAM', 'C(b4)', NULL, 'number', false, 'b4', 'active', false, NULL, false),
('T.b4', 'WF-BEAM', 'T(b4)', NULL, 'number', false, 'b4', 'active', false, NULL, false),

-- Posisi b1-b2/2 (Formula)
('H.b1-b2/2', 'WF-BEAM', 'H(b1-b2/2)', 'Simetri Kanan', 'number', true, 'b1-b2/2', 'active', true, '(H.b1-H.b2)/2', true),
('C.b1-b2/2', 'WF-BEAM', 'C(b1-b2/2)', 'Simetri Kanan', 'number', true, 'b1-b2/2', 'active', true, '(C.b1-C.b2)/2', true),
('T.b1-b2/2', 'WF-BEAM', 'T(b1-b2/2)', 'Simetri Kanan', 'number', true, 'b1-b2/2', 'active', true, '(T.b1-T.b2)/2', true),

-- Posisi b3-b4/2 (Formula)
('H.b3-b4/2', 'WF-BEAM', 'H(b3-b4/2)', 'Simetri Kiri', 'number', true, 'b3-b4/2', 'active', true, '(H.b3-H.b4)/2', true),
('C.b3-b4/2', 'WF-BEAM', 'C(b3-b4/2)', 'Simetri Kiri', 'number', true, 'b3-b4/2', 'active', true, '(C.b3-C.b4)/2', true),
('T.b3-b4/2', 'WF-BEAM', 'T(b3-b4/2)', 'Simetri Kiri', 'number', true, 'b3-b4/2', 'active', true, '(T.b3-T.b4)/2', true),

-- Basic input bawah Tabel
('kgm.nominal', 'WF-BEAM', 'Kg/m Nominal', NULL, 'number', false, 'basic', 'active', false, NULL, true),
('length', 'WF-BEAM', 'Length', NULL, 'number', false, 'basic', 'active', false, NULL, true),
('total.length', 'WF-BEAM', 'Total Length', NULL, 'number', false, 'basic', 'active', false, NULL, true),
('weight', 'WF-BEAM', 'Weight', NULL, 'number', false, 'basic', 'active', false, NULL, true),
('kgm.actual', 'WF-BEAM', 'Kg/m Actual', NULL, 'number', false, 'basic', 'active', false, NULL, true),
('percent.deviasi', 'WF-BEAM', 'Percent Deviasi', NULL, 'number', false, 'basic', 'active', false, NULL, true),
('radius.basic', 'WF-BEAM', 'Radius', NULL, 'number', false, 'basic', 'active', false, NULL, true),
('cow.basic', 'WF-BEAM', 'CoW', NULL, 'number', false, 'basic', 'active', false, NULL, true),
('os.basic', 'WF-BEAM', 'OS', NULL, 'number', false, 'basic', 'active', false, NULL, true),

-- Data QC Default
('pic.user', 'WF-BEAM', 'PIC/User', NULL, 'text', false, 'default', 'active', false, NULL, true),
('start', 'WF-BEAM', 'Start', NULL, 'time', false, 'default', 'active', false, NULL, true),
('finish', 'WF-BEAM', 'Finish', NULL, 'time', false, 'default', 'active', false, NULL, true),
('lot', 'WF-BEAM', 'Lot', NULL, 'text', false, 'default', 'active', false, NULL, true),
('bloom', 'WF-BEAM', 'Bloom', NULL, 'text', false, 'default', 'active', false, NULL, true),
('heat', 'WF-BEAM', 'Heat', NULL, 'text', false, 'default', 'active', false, NULL, true),

-- Physical Dimensions (Form Right)
('width.of.web', 'WF-BEAM', 'Width of Web', 'Lebar Web', 'number', false, 'FormRight', 'active', false, NULL, true),
('height.of.flange', 'WF-BEAM', 'Height of Flange', 'Tinggi Flange', 'number', false, 'FormRight', 'active', false, NULL, true),
('flange.thickness', 'WF-BEAM', 'Flange Thickness', 'Tebal Flange', 'number', false, 'FormRight', 'active', false, NULL, true),
('web.thickness', 'WF-BEAM', 'Web Thickness', 'Tebal Web', 'number', false, 'FormRight', 'active', false, NULL, true),
('web.off.center', 'WF-BEAM', 'Web Off Center', 'Simetri', 'number', false, 'FormRight', 'active', false, NULL, true),
('unit.weight', 'WF-BEAM', 'Unit Weight (Kgm)', NULL, 'number', false, 'FormRight', 'active', false, NULL, true),
('radius', 'WF-BEAM', 'Radius', NULL, 'number', false, 'FormRight', 'active', false, NULL, true),
('cow', 'WF-BEAM', 'CoW', NULL, 'number', false, 'FormRight', 'active', false, NULL, true),
('out.of.square', 'WF-BEAM', 'OS', NULL, 'number', false, 'FormRight', 'active', false, NULL, true);
