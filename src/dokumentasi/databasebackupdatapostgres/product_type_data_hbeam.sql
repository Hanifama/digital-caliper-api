INSERT INTO product_type_data 
(code, prodtype_id, label, alias, type, is_readonly, position, status, is_formula, formula, is_tolerance)
VALUES

-- Posisi H-top
('H.H-top', 'H-BEAM', 'H(H-top)', 'Lebar Web Atas', 'number', false, 'H-Top', 'active', false, NULL, true),
('C.H-top', 'H-BEAM', 'C(H-top)', 'Lebar Web Atas', 'number', false, 'H-Top', 'active', false, NULL, true),
('T.H-top', 'H-BEAM', 'T(H-top)', 'Lebar Web Atas', 'number', false, 'H-Top', 'active', false, NULL, true),

-- Posisi H-bottom
('H.H-bottom', 'H-BEAM', 'H(H-bottom)', 'Lebar Web Bawah', 'number', false, 'H-Bottom', 'active', false, NULL, true),
('C.H-bottom', 'H-BEAM', 'C(H-bottom)', 'Lebar Web Bawah', 'number', false, 'H-Bottom', 'active', false, NULL, true),
('T.H-bottom', 'H-BEAM', 'T(H-bottom)', 'Lebar Web Bawah', 'number', false, 'H-Bottom', 'active', false, NULL, true),

-- Posisi B1
('H.B1', 'H-BEAM', 'H(B1)', 'Tinggi Flange Kiri', 'number', false, 'B1', 'active', false, NULL, true),
('C.B1', 'H-BEAM', 'C(B1)', 'Tinggi Flange Kiri', 'number', false, 'B1', 'active', false, NULL, true),
('T.B1', 'H-BEAM', 'T(B1)', 'Tinggi Flange Kiri', 'number', false, 'B1', 'active', false, NULL, true),

-- Posisi B2
('H.B2', 'H-BEAM', 'H(B2)', 'Tinggi Flange Kanan', 'number', false, 'B2', 'active', false, NULL, true),
('C.B2', 'H-BEAM', 'C(B2)', 'Tinggi Flange Kanan', 'number', false, 'B2', 'active', false, NULL, true),
('T.B2', 'H-BEAM', 'T(B2)', 'Tinggi Flange Kanan', 'number', false, 'B2', 'active', false, NULL, true),

-- Posisi t1
('H.t1', 'H-BEAM', 'H(t1)', 'Tebal Flange Kiri Atas', 'number', false, 't1', 'active', false, NULL, true),
('C.t1', 'H-BEAM', 'C(t1)', 'Tebal Flange Kiri Atas', 'number', false, 't1', 'active', false, NULL, true),
('T.t1', 'H-BEAM', 'T(t1)', 'Tebal Flange Kiri Atas', 'number', false, 't1', 'active', false, NULL, true),

-- Posisi t2
('H.t2', 'H-BEAM', 'H(t2)', 'Tebal Flange Kiri Bawah', 'number', false, 't2', 'active', false, NULL, true),
('C.t2', 'H-BEAM', 'C(t2)', 'Tebal Flange Kiri Bawah', 'number', false, 't2', 'active', false, NULL, true),
('T.t2', 'H-BEAM', 'T(t2)', 'Tebal Flange Kiri Bawah', 'number', false, 't2', 'active', false, NULL, true),

-- Posisi t3
('H.t3', 'H-BEAM', 'H(t3)', 'Tebal Flange Kanan Atas', 'number', false, 't3', 'active', false, NULL, true),
('C.t3', 'H-BEAM', 'C(t3)', 'Tebal Flange Kanan Atas', 'number', false, 't3', 'active', false, NULL, true),
('T.t3', 'H-BEAM', 'T(t3)', 'Tebal Flange Kanan Atas', 'number', false, 't3', 'active', false, NULL, true),

-- Posisi t4
('H.t4', 'H-BEAM', 'H(t4)', 'Tebal Flange Kanan Bawah', 'number', false, 't4', 'active', false, NULL, true),
('C.t4', 'H-BEAM', 'C(t4)', 'Tebal Flange Kanan Bawah', 'number', false, 't4', 'active', false, NULL, true),
('T.t4', 'H-BEAM', 'T(t4)', 'Tebal Flange Kanan Bawah', 'number', false, 't4', 'active', false, NULL, true),

-- Posisi t5
('H.t5', 'H-BEAM', 'H(t5)', 'Tebal Web', 'number', false, 't5', 'active', false, NULL, true),
('C.t5', 'H-BEAM', 'C(t5)', 'Tebal Web', 'number', false, 't5', 'active', false, NULL, true),
('T.t5', 'H-BEAM', 'T(t5)', 'Tebal Web', 'number', false, 't5', 'active', false, NULL, true),

-- Posisi t6
('H.t6', 'H-BEAM', 'H(t6)', 'Tebal Web', 'number', false, 't6', 'active', false, NULL, true),
('C.t6', 'H-BEAM', 'C(t6)', 'Tebal Web', 'number', false, 't6', 'active', false, NULL, true),
('T.t6', 'H-BEAM', 'T(t6)', 'Tebal Web', 'number', false, 't6', 'active', false, NULL, true),

-- Posisi t7
('H.t7', 'H-BEAM', 'H(t7)', 'Tebal Web', 'number', false, 't7', 'active', false, NULL, true),
('C.t7', 'H-BEAM', 'C(t7)', 'Tebal Web', 'number', false, 't7', 'active', false, NULL, true),
('T.t7', 'H-BEAM', 'T(t7)', 'Tebal Web', 'number', false, 't7', 'active', false, NULL, true),

-- Posisi b1 (TOLERANSI)
('H.b1', 'H-BEAM', 'H(b1)', NULL, 'number', false, 'b1', 'active', false, NULL, false),
('C.b1', 'H-BEAM', 'C(b1)', NULL, 'number', false, 'b1', 'active', false, NULL, false),
('T.b1', 'H-BEAM', 'T(b1)', NULL, 'number', false, 'b1', 'active', false, NULL, false),

-- Posisi b2 (TOLERANSI)
('H.b2', 'H-BEAM', 'H(b2)', NULL, 'number', false, 'b2', 'active', false, NULL, false),
('C.b2', 'H-BEAM', 'C(b2)', NULL, 'number', false, 'b2', 'active', false, NULL, false),
('T.b2', 'H-BEAM', 'T(b2)', NULL, 'number', false, 'b2', 'active', false, NULL, false),

-- Posisi b3 (TOLERANSI)
('H.b3', 'H-BEAM', 'H(b3)', NULL, 'number', false, 'b3', 'active', false, NULL, false),
('C.b3', 'H-BEAM', 'C(b3)', NULL, 'number', false, 'b3', 'active', false, NULL, false),
('T.b3', 'H-BEAM', 'T(b3)', NULL, 'number', false, 'b3', 'active', false, NULL, false),

-- Posisi b4 (TOLERANSI)
('H.b4', 'H-BEAM', 'H(b4)', NULL, 'number', false, 'b4', 'active', false, NULL, false),
('C.b4', 'H-BEAM', 'C(b4)', NULL, 'number', false, 'b4', 'active', false, NULL, false),
('T.b4', 'H-BEAM', 'T(b4)', NULL, 'number', false, 'b4', 'active', false, NULL, false),

-- Posisi b1-b2/2 (Formula)
('H.b1-b2/2', 'H-BEAM', 'H(b1-b2/2)', 'Simetri Kanan', 'number', true, 'b1-b2/2', 'active', true, '(H.b1-H.b2)/2', true),
('C.b1-b2/2', 'H-BEAM', 'C(b1-b2/2)', 'Simetri Kanan', 'number', true, 'b1-b2/2', 'active', true, '(C.b1-C.b2)/2', true),
('T.b1-b2/2', 'H-BEAM', 'T(b1-b2/2)', 'Simetri Kanan', 'number', true, 'b1-b2/2', 'active', true, '(T.b1-T.b2)/2', true),

-- Posisi b3-b4/2 (Formula)
('H.b3-b4/2', 'H-BEAM', 'H(b3-b4/2)', 'Simetri Kiri', 'number', true, 'b3-b4/2', 'active', true, '(H.b3-H.b4)/2', true),
('C.b3-b4/2', 'H-BEAM', 'C(b3-b4/2)', 'Simetri Kiri', 'number', true, 'b3-b4/2', 'active', true, '(C.b3-C.b4)/2', true),
('T.b3-b4/2', 'H-BEAM', 'T(b3-b4/2)', 'Simetri Kiri', 'number', true, 'b3-b4/2', 'active', true, '(T.b3-T.b4)/2', true),

-- Basic input bawah Tabel
('kgm.nominal', 'H-BEAM', 'Kg/m Nominal', NULL, 'number', false, 'basic', 'active', false, NULL, true),
('length', 'H-BEAM', 'Length', NULL, 'number', false, 'basic', 'active', false, NULL, true),
('total.length', 'H-BEAM', 'Total Length', NULL, 'number', false, 'basic', 'active', false, NULL, true),
('weight', 'H-BEAM', 'Weight', NULL, 'number', false, 'basic', 'active', false, NULL, true),
('kgm.actual', 'H-BEAM', 'Kg/m Actual', NULL, 'number', false, 'basic', 'active', false, NULL, true),
('percent.deviasi', 'H-BEAM', 'Percent Deviasi', NULL, 'number', false, 'basic', 'active', false, NULL, true),
('radius.basic', 'H-BEAM', 'Radius', NULL, 'number', false, 'basic', 'active', false, NULL, true),
('cow.basic', 'H-BEAM', 'CoW', NULL, 'number', false, 'basic', 'active', false, NULL, true),
('os.basic', 'H-BEAM', 'OS', NULL, 'number', false, 'basic', 'active', false, NULL, true),

-- Data QC Default
('pic.user', 'H-BEAM', 'PIC/User', NULL, 'text', false, 'default', 'active', false, NULL, true),
('start', 'H-BEAM', 'Start', NULL, 'time', false, 'default', 'active', false, NULL, true),
('finish', 'H-BEAM', 'Finish', NULL, 'time', false, 'default', 'active', false, NULL, true),
('lot', 'H-BEAM', 'Lot', NULL, 'text', false, 'default', 'active', false, NULL, true),
('bloom', 'H-BEAM', 'Bloom', NULL, 'text', false, 'default', 'active', false, NULL, true),
('heat', 'H-BEAM', 'Heat', NULL, 'text', false, 'default', 'active', false, NULL, true),

-- Physical Dimensions (Form Right)
('width.of.web', 'H-BEAM', 'Width of Web', 'Lebar Web', 'number', false, 'FormRight', 'active', false, NULL, true),
('height.of.flange', 'H-BEAM', 'Height of Flange', 'Tinggi Flange', 'number', false, 'FormRight', 'active', false, NULL, true),
('flange.thickness', 'H-BEAM', 'Flange Thickness', 'Tebal Flange', 'number', false, 'FormRight', 'active', false, NULL, true),
('web.thickness', 'H-BEAM', 'Web Thickness', 'Tebal Web', 'number', false, 'FormRight', 'active', false, NULL, true),
('web.off.center', 'H-BEAM', 'Web Off Center', 'Simetri', 'number', false, 'FormRight', 'active', false, NULL, true),
('unit.weight', 'H-BEAM', 'Unit Weight (Kgm)', NULL, 'number', false, 'FormRight', 'active', false, NULL, true),
('radius', 'H-BEAM', 'Radius', NULL, 'number', false, 'FormRight', 'active', false, NULL, true),
('cow', 'H-BEAM', 'CoW', NULL, 'number', false, 'FormRight', 'active', false, NULL, true),
('out.of.square', 'H-BEAM', 'OS', NULL, 'number', false, 'FormRight', 'active', false, NULL, true);
