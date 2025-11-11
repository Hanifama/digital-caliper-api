import 'reflect-metadata';
import { datasourceMySQL } from '../config/database.config';
import { SeederUser } from './seed-user.service';
import { ProductTypeDataSeederHbeam } from './seed-product-type-data-hBeam';

async function bootstrap() {
  await datasourceMySQL.initialize();
  console.log('📦 Database connected...');

  const seederUser = new SeederUser(datasourceMySQL);
  const productHbeam = new ProductTypeDataSeederHbeam(datasourceMySQL);

  await seederUser.run();
  await productHbeam.run();

  await datasourceMySQL.destroy();
  console.log('✅ Seeder selesai dijalankan');
}

bootstrap().catch((err) => {
  console.error('❌ Error saat seeding:', err);
});
