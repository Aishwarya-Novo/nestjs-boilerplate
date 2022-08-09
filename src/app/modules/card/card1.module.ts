// eslint-disable-next-line max-classes-per-file
import { Module, Provider, } from '@nestjs/common';

export class SomeExistingClass {
  public hello() {
    // eslint-disable-next-line no-console
    console.log('this is SomeExistingClass');
  }
}

const providers: Provider[] = [
  {
    provide: SomeExistingClass,
    useClass: SomeExistingClass,
  },
];

@Module({
  imports: [
  ],
  providers: [ ...providers, ],
  exports: [ ...providers, ],
})
export class Card1Module {}
