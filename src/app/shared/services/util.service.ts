import { Injectable, } from '@nestjs/common';
import { v4 as uuidv4, } from 'uuid';
import { CardCategory, CardStatus, CardVendor, } from '../enums/card.enums';

interface DummyCard {
  external_card_id: string;
  vendor: string;
  category: string;
  type: string;
  last_four: string;
  status: string;
  expiry: string;
}

function generate(): string {
  return Math.floor(Math.random() * 1E16).toString();
}

@Injectable()
export class UtilService {
  public generateCard(): DummyCard {
    return {
      vendor: CardVendor.PRIVACY,
      category: CardCategory.VIRTUAL,
      type: 'SINGLE_USE',
      last_four: generate().slice(12),
      status: CardStatus.ACTIVE,
      expiry: '12/2025',
      external_card_id: uuidv4(),
    } as DummyCard;
  }
}
