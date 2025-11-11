// src/seed/product-type-data.seeder.ts
import { Injectable } from '@nestjs/common';
import { ProductTypeData } from 'src/app/product/entity/product-type-data.entity';
import { ProductType } from 'src/app/product/entity/product-type.entity';
import { DataSource } from 'typeorm';

import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductTypeDataSeederHbeam {
  constructor(private dataSource: DataSource) {}

  async run() {
    const productTypeRepo = this.dataSource.getRepository(ProductType);
    const productTypeDataRepo = this.dataSource.getRepository(ProductTypeData);

    // --- Seed ProductType ---
    const productTypes = [
      { prodtype_id: uuidv4(), name: 'H-Beam', status: 'Active' },
      // Bisa ditambah type lain kalau ada
    ];
    const savedProductTypes = await productTypeRepo.save(productTypes);

    const hBeam = savedProductTypes.find((pt) => pt.name === 'H-Beam')!;

    // --- Seed ProductTypeData ---
    const productTypeData = [
      // Posisi T1
      {
        code: 'H.t1',
        label: 'H(t1)',
        type: 'number',
        position: 'T1',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'C.t1',
        label: 'C(t1)',
        type: 'number',
        position: 'T1',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'T.t1',
        label: 'T(t1)',
        type: 'number',
        position: 'T1',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Posisi H-top
      {
        code: 'H.top',
        label: 'H(top)',
        type: 'number',
        position: 'H-Top',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'C.top',
        label: 'C(top)',
        type: 'number',
        position: 'H-Top',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'T.top',
        label: 'T(top)',
        type: 'number',
        position: 'H-Top',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Posisi H-center
      {
        code: 'H.center',
        label: 'H(center)',
        type: 'number',
        position: 'H-Center',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'C.center',
        label: 'C(center)',
        type: 'number',
        position: 'H-Center',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'T.center',
        label: 'T(center)',
        type: 'number',
        position: 'H-Center',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Posisi H-bottom
      {
        code: 'H.bottom',
        label: 'H(bottom)',
        type: 'number',
        position: 'H-Bottom',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'C.bottom',
        label: 'C(bottom)',
        type: 'number',
        position: 'H-Bottom',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'T.bottom',
        label: 'T(bottom)',
        type: 'number',
        position: 'H-Bottom',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Posisi T-3
      {
        code: 'H.t3',
        label: 'H(T-3)',
        type: 'number',
        position: 'T-3',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'C.t3',
        label: 'C(T-3)',
        type: 'number',
        position: 'T-3',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'T.t3',
        label: 'T(T-3)',
        type: 'number',
        position: 'T-3',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Posisi B1
      {
        code: 'H.B1',
        label: 'H(B1)',
        type: 'number',
        position: 'B1',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'C.B1',
        label: 'C(B1)',
        type: 'number',
        position: 'B1',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'T.B1',
        label: 'T(B1)',
        type: 'number',
        position: 'B1',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Posisi b1
      {
        code: 'H.b1',
        label: 'H(b1)',
        type: 'number',
        position: 'b1',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'C.b1',
        label: 'C(b1)',
        type: 'number',
        position: 'b1',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'T.b1',
        label: 'T(b1)',
        type: 'number',
        position: 'b1',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Posisi tWS
      {
        code: 'H.tWS',
        label: 'H(tWS)',
        type: 'number',
        position: 'tWS',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'C.tWS',
        label: 'C(tWS)',
        type: 'number',
        position: 'tWS',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'T.tWS',
        label: 'T(tWS)',
        type: 'number',
        position: 'tWS',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Posisi t5
      {
        code: 'H.t5',
        label: 'H(t5)',
        type: 'number',
        position: 't5',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'C.t5',
        label: 'C(t5)',
        type: 'number',
        position: 't5',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'T.t5',
        label: 'T(t5)',
        type: 'number',
        position: 't5',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Posisi tDs
      {
        code: 'H.tDs',
        label: 'H(tDs)',
        type: 'number',
        position: 'tDs',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'C.tDs',
        label: 'C(tDs)',
        type: 'number',
        position: 'tDs',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'T.tDs',
        label: 'T(tDs)',
        type: 'number',
        position: 'tDs',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Posisi b3
      {
        code: 'H.b3',
        label: 'H(b3)',
        type: 'number',
        position: 'b3',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'C.b3',
        label: 'C(b3)',
        type: 'number',
        position: 'b3',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'T.b3',
        label: 'T(b3)',
        type: 'number',
        position: 'b3',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Posisi B2
      {
        code: 'H.B2',
        label: 'H(B2)',
        type: 'number',
        position: 'B2',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'C.B2',
        label: 'C(B2)',
        type: 'number',
        position: 'B2',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'T.B2',
        label: 'T(B2)',
        type: 'number',
        position: 'B2',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Posisi b2
      {
        code: 'H.b2',
        label: 'H(b2)',
        type: 'number',
        position: 'b2',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'C.b2',
        label: 'C(b2)',
        type: 'number',
        position: 'b2',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'T.b2',
        label: 'T(b2)',
        type: 'number',
        position: 'b2',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Posisi (b1-b2√2)
      {
        code: 'H.b1-b2√2',
        label: 'H(b1-b2√2)',
        type: 'number',
        position: 'b1-b2√2',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'C.b1-b2√2',
        label: 'C(b1-b2√2)',
        type: 'number',
        position: 'b1-b2√2',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'T.b1-b2√2',
        label: 'T(b1-b2√2)',
        type: 'number',
        position: 'b1-b2√2',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Posisi (b3-b4√2)
      {
        code: 'H.b3-b4√2',
        label: 'H(b3-b4√2)',
        type: 'number',
        position: 'b3-b4√2',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'C.b3-b4√2',
        label: 'C(b3-b4√2)',
        type: 'number',
        position: 'b3-b4√2',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'T.b3-b4√2',
        label: 'T(b3-b4√2)',
        type: 'number',
        position: 'b3-b4√2',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Posisi b4
      {
        code: 'H.b4',
        label: 'H(b4)',
        type: 'number',
        position: 'b4',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'C.b4',
        label: 'C(b4)',
        type: 'number',
        position: 'b4',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'T.b4',
        label: 'T(b4)',
        type: 'number',
        position: 'b4',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Posisi t2
      {
        code: 'H.t2',
        label: 'H(t2)',
        type: 'number',
        position: 't2',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'C.t2',
        label: 'C(t2)',
        type: 'number',
        position: 't2',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'T.t2',
        label: 'T(t2)',
        type: 'number',
        position: 't2',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Posisi b10b3
      {
        code: 'H.b10b3',
        label: 'H(b10b3)',
        type: 'number',
        position: 'b10b3',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'C.b10b3',
        label: 'C(b10b3)',
        type: 'number',
        position: 'b10b3',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'T.b10b3',
        label: 'T(b10b3)',
        type: 'number',
        position: 'b10b3',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Posisi DFFH
      {
        code: 'H.DFFH',
        label: 'H(DFFH)',
        type: 'number',
        position: 'DFFH',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'C.DFFH',
        label: 'C(DFFH)',
        type: 'number',
        position: 'DFFH',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'T.DFFH',
        label: 'T(DFFH)',
        type: 'number',
        position: 'DFFH',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Posisi b2-b4
      {
        code: 'H.b2-b4',
        label: 'H(b2-b4)',
        type: 'number',
        position: 'b2-b4',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'C.b2-b4',
        label: 'C(b2-b4)',
        type: 'number',
        position: 'b2-b4',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'T.b2-b4',
        label: 'T(b2-b4)',
        type: 'number',
        position: 'b2-b4',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Posisi t4
      {
        code: 'H.t4',
        label: 'H(t4)',
        type: 'number',
        position: 't4',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'C.t4',
        label: 'C(t4)',
        type: 'number',
        position: 't4',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'T.t4',
        label: 'T(t4)',
        type: 'number',
        position: 't4',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Basic measurements
      {
        code: 'length',
        label: 'Length',
        type: 'number',
        position: 'Length',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'weight',
        label: 'Weight',
        type: 'number',
        position: 'Weight',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'unit_qty',
        label: 'Unit Qty',
        type: 'number',
        position: 'Unit Qty',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'pic_user',
        label: 'PIC/User',
        type: 'text',
        position: 'PIC/User',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'start',
        label: 'Start',
        type: 'number',
        position: 'Start',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'finish',
        label: 'Finish',
        type: 'number',
        position: 'Finish',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'lot',
        label: 'Lot',
        type: 'text',
        position: 'Lot',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'bloom',
        label: 'Bloom',
        type: 'text',
        position: 'Bloom',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'heat',
        label: 'Heat',
        type: 'text',
        position: 'Heat',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Dropbox (Inspection Types) - sebenarnya checkbox
      {
        code: 'scratch',
        label: 'Scratch',
        type: 'checkbox',
        position: 'Scratch',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'whirkle',
        label: 'Whirkle',
        type: 'checkbox',
        position: 'Whirkle',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'straightness',
        label: 'Straightness',
        type: 'checkbox',
        position: 'Straightness',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'waving',
        label: 'Waving',
        type: 'checkbox',
        position: 'Waving',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'crack',
        label: 'Crack',
        type: 'checkbox',
        position: 'Crack',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'scrab',
        label: 'Scrab',
        type: 'checkbox',
        position: 'Scrab',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'scale',
        label: 'Scale',
        type: 'checkbox',
        position: 'Scale',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },

      // Physical dimensions
      {
        code: 'height',
        label: 'Height',
        type: 'number',
        position: 'Height',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'width_wf',
        label: 'Width WF',
        type: 'number',
        position: 'Width WF',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'flange_thickness',
        label: 'Flange Thickness',
        type: 'number',
        position: 'Flange Thickness',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'web_thickness',
        label: 'Web Thickness',
        type: 'number',
        position: 'Web Thickness',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'tf_tw',
        label: 'TF/TW',
        type: 'number',
        position: 'TF/TW',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'web_off_center',
        label: 'Web Off Center',
        type: 'number',
        position: 'Web Off Center',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'unit_weight',
        label: 'Unit Weight',
        type: 'number',
        position: 'Unit Weight',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
      {
        code: 'radius',
        label: 'Radius',
        type: 'number',
        position: 'Radius',
        status: 'active',
        prodtype_id: hBeam.prodtype_id,
      },
    ];

    for (const ptd of productTypeData) {
      const entity = productTypeDataRepo.create(ptd);
      await productTypeDataRepo.save(entity);
    }

    console.log('✅ ProductTypeData seeding selesai!');
  }
}
