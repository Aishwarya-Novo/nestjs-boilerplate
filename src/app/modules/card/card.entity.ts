import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { ICard, } from './card.interface';

@Entity({ name: 'cards', })
export class Card implements ICard {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column({ type: 'text', })
    vendor: string;

  @Column({ type: 'text', })
    category: string;

  @Column({ type: 'text', })
    type: string;

  @Column({ type: 'text', })
    external_card_id: string;

  @Column({ type: 'text', })
    user_id: string;

  @Column({ type: 'text', })
    account_id: string;

  @Column({ type: 'text', })
    nick_name: string;

  @Column({ type: 'text', })
    last_four: string;

  @Column({ type: 'text', })
    status: string;

  @Column({ type: 'text', })
    expiry: string;

  @CreateDateColumn({ type: 'timestamp', })
    created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', })
    updated_at: Date;
}
