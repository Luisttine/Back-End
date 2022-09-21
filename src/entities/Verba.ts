import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, ManyToMany, JoinTable } from "typeorm"
import { Lancamento } from './Lancamento'

@Entity('verbas')
export class Verba {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false})
    verba: number

    @Column({nullable: false, type: "decimal"})
    adicional: number

    @Column({nullable: false})
    quantidadehoras: number

    @Column({nullable: false})
    inicio: Date

    @Column({nullable: false})
    fim: Date

    @ManyToMany(() => Lancamento, lancamento => lancamento.verbas)
	@JoinTable({
		name: 'lancamento_verba',
		joinColumn: {
			name: 'lançamento_id',
			referencedColumnName: 'id',
		},
		inverseJoinColumn: {
			name: 'verba_id',
			referencedColumnName: 'id',
		},
	})
	lancamentos: Lancamento[]

}