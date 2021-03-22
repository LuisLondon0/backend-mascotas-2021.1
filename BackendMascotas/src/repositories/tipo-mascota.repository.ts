import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PostgresqldsDataSource} from '../datasources';
import {TipoMascota, TipoMascotaRelations} from '../models';

export class TipoMascotaRepository extends DefaultCrudRepository<
  TipoMascota,
  typeof TipoMascota.prototype.id,
  TipoMascotaRelations
> {
  constructor(
    @inject('datasources.postgresqlds') dataSource: PostgresqldsDataSource,
  ) {
    super(TipoMascota, dataSource);
  }
}
