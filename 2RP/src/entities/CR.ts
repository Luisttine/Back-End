import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm"
import { Colaborador } from "./Colaborador"

@Entity('crs')
export class CR {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: false})
    numero: number

    @Column({length: 100,nullable: false})
    nome: string

    @OneToMany(() => Colaborador, colaborador => colaborador.cr)
	colaboradores: Colaborador[]

}