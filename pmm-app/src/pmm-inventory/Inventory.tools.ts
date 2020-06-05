import { CustomLabel, ServicesList } from './Inventory.types';

export const processPromiseResults = (requests: Array<Promise<any>>) =>
  Promise.all(
    requests.map(promise =>
      promise
        .then(value => ({
          status: 'fulfilled',
          value,
        }))
        .catch(reason => ({
          status: 'rejected',
          reason,
        }))
    )
  );

export const filterFulfilled = ({ status }: { status: string }) => status === 'fulfilled';

interface Model {
  custom_labels: CustomLabel[];
  type: string;
  isDeleted: boolean;
}

const CommonModel = function(this: Model, params, type) {
  const { custom_labels, ...rest } = params;
  this.custom_labels =
    custom_labels && Object.keys(custom_labels).length
      ? Object.entries<string>(custom_labels).map<CustomLabel>(([key, value]) => ({ key, value }))
      : [];
  this.type = type;
  this.isDeleted = false;
  Object.keys(rest).forEach(param => {
    this[param] = rest[param];
  });
};
const inventoryTypes = {
  amazon_rds_mysql: 'Amazon RDS MySQL',
  container: 'Container',
  external_exporter: 'External exporter',
  generic: 'Generic',
  mongodb_exporter: 'MongoDB exporter',
  mongodb: 'MongoDB',
  mysql: 'MySQL',
  mysqld_exporter: 'MySQL exporter',
  node_exporter: 'Node exporter',
  pmm_agent: 'PMM Agent',
  postgres_exporter: 'Postgres exporter',
  postgresql: 'PostgreSQL',
  proxysql_exporter: 'ProxySQL exporter',
  proxysql: 'ProxySQL',
  qan_mongodb_profiler_agent: 'QAN MongoDB Profiler Agent',
  qan_mysql_perfschema_agent: 'QAN MySQL Perfschema Agent',
  qan_mysql_slowlog_agent: 'QAN MySQL Slowlog Agent',
  qan_postgresql_pgstatements_agent: 'QAN PostgreSQL PgStatements Agent',
  rds_exporter: 'RDS exporter',
  remote_rds: 'Remote Amazon RDS',
  remote: 'Remote',
};
export const InventoryDataService = {
  generateStructure(item: ServicesList) {
    const createParams = Object.keys(item)
      .map(type => ({ type, params: item[type] }))
      .map(agent =>
        agent.params.map(arrItem => {
          const type = inventoryTypes[agent.type] || '';
          return new CommonModel(arrItem, type);
        })
      );
    return [].concat(...createParams);
  },
};
