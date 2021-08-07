import { CustomModuleDetector, MidwayContainer } from '@midwayjs/core';
import { Framework } from './index';

export const createModuleServerlessFramework = async (options: {
  modules: any[];
  entry: { Configuration: any };
}) => {
  const container = new MidwayContainer();
  container.setFileDetector(
    new CustomModuleDetector({
      modules: options.modules,
    })
  );
  container.load(options.entry);
  const framework = new Framework();
  framework.configure({});
  await framework.initialize({ applicationContext: container });
  await framework.run();
  return framework;
};
