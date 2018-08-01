import { FarragoModule } from './farrago.module';

describe('FarragoModule', () => {
  let farragoModule: FarragoModule;

  beforeEach(() => {
    farragoModule = new FarragoModule();
  });

  it('should create an instance', () => {
    expect(farragoModule).toBeTruthy();
  });
});
