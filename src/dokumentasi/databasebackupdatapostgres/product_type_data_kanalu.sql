INSERT INTO product_type_data (code, prodtype_id, label, type, is_readonly, position, status)
VALUES
-- Posisi s
('H.s', 'KANAL-U', 'H(s)', 'number', false, 's', 'active'),
('C.s', 'KANAL-U', 'C(s)', 'number', false, 's', 'active'),
('T.s', 'KANAL-U', 'T(s)', 'number', false, 's', 'active'),

-- Posisi t=R1
('H.t=r1', 'KANAL-U', 'H(t=R1)', 'number', false, 't=R1', 'active'),
('C.t=r1', 'KANAL-U', 'C(t=R1)', 'number', false, 't=R1', 'active'),
('T.t=r1', 'KANAL-U', 'T(t=R1)', 'number', false, 't=R1', 'active'),

-- Posisi R2
('H.r2', 'KANAL-U', 'H(R2)', 'number', false, 'R2', 'active'),
('C.r2', 'KANAL-U', 'C(R2)', 'number', false, 'R2', 'active'),
('T.r2', 'KANAL-U', 'T(R2)', 'number', false, 'R2', 'active'),

-- Posisi e
('H.e', 'KANAL-U', 'H(e)', 'number', false, 'e', 'active'),
('C.e', 'KANAL-U', 'C(e)', 'number', false, 'e', 'active'),
('T.e', 'KANAL-U', 'T(e)', 'number', false, 'e', 'active'),

-- Posisi d
('H.d', 'KANAL-U', 'H(d)', 'number', false, 'd', 'active'),
('C.d', 'KANAL-U', 'C(d)', 'number', false, 'd', 'active'),
('T.d', 'KANAL-U', 'T(d)', 'number', false, 'd', 'active'),

-- Posisi Ø
('H.Ø', 'KANAL-U', 'H(Ø)', 'number', false, 'Ø', 'active'),
('C.Ø', 'KANAL-U', 'C(Ø)', 'number', false, 'Ø', 'active'),
('T.Ø', 'KANAL-U', 'T(Ø)', 'number', false, 'Ø', 'active'),

-- Posisi Crossec.A
('H.crossec.a', 'KANAL-U', 'H(Crossec.A)', 'number', false, 'Crossec.A', 'active'),
('C.crossec.a', 'KANAL-U', 'C(Crossec.A)', 'number', false, 'Crossec.A', 'active'),
('T.crossec.a', 'KANAL-U', 'T(Crossec.A)', 'number', false, 'Crossec.A', 'active'),

-- Posisi AL
('H.al', 'KANAL-U', 'H(AL)', 'number', false, 'AL', 'active'),
('C.al', 'KANAL-U', 'C(AL)', 'number', false, 'AL', 'active'),
('T.al', 'KANAL-U', 'T(AL)', 'number', false, 'AL', 'active'),

-- Posisi emin
('H.emin', 'KANAL-U', 'H(emin)', 'number', false, 'emin', 'active'),
('C.emin', 'KANAL-U', 'C(emin)', 'number', false, 'emin', 'active'),
('T.emin', 'KANAL-U', 'T(emin)', 'number', false, 'emin', 'active'),

-- Posisi emax
('H.emax', 'KANAL-U', 'H(emax)', 'number', false, 'emax', 'active'),
('C.emax', 'KANAL-U', 'C(emax)', 'number', false, 'emax', 'active'),
('T.emax', 'KANAL-U', 'T(emax)', 'number', false, 'emax', 'active'),

-- Posisi AG
('H.ag', 'KANAL-U', 'H(AG)', 'number', false, 'AG', 'active'),
('C.ag', 'KANAL-U', 'C(AG)', 'number', false, 'AG', 'active'),
('T.ag', 'KANAL-U', 'T(AG)', 'number', false, 'AG', 'active'),


-- Basic measurements
('length', 'KANAL-U', 'Length', 'number', false, 'basic', 'active'),
('weight', 'KANAL-U', 'Weight', 'number', false, 'basic', 'active'),
('unit.qty', 'KANAL-U', 'Unit Qty', 'number', false, 'basic', 'active'),

-- Default
('PIC.user', 'KANAL-U', 'PIC/User', 'text', false, 'default', 'active'),
('start', 'KANAL-U', 'Start', 'time', false, 'default', 'active'),
('finish', 'KANAL-U', 'Finish', 'time', false, 'default', 'active'),
('lot', 'KANAL-U', 'Lot', 'text', false, 'default', 'active'),
('bloom', 'KANAL-U', 'Bloom', 'text', false, 'default', 'active'),
('heat', 'KANAL-U', 'Heat', 'text', false, 'default', 'active'),


-- Physical dimensions
('height', 'KANAL-U', 'Height', 'number', false, 'FormRight', 'active'),
('width', 'KANAL-U', 'Width', 'number', false, 'FormRight', 'active'),
('s', 'KANAL-U', 's', 'number', false, 'FormRight', 'active'),
('t=r1', 'KANAL-U', 't=R1', 'number', false, 'FormRight', 'active'),
('r2', 'KANAL-U', 'R2', 'number', false, 'FormRight', 'active'),
('cross.section.area', 'KANAL-U', 'Cross Section Area', 'number', false, 'FormRight', 'active'),
('al', 'KANAL-U', 'AL', 'number', false, 'FormRight', 'active'),
('ag', 'KANAL-U', 'AG', 'number', false, 'FormRight', 'active');