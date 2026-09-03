import Aluno from './Aluno'
import Professor from './Professor'
import tecnicoAdm from './tecAdministrativo'

let aluno1 = new Aluno("TDS-54553","Escola do Tio Zezinho","Maria da Silva",16,"01234567890","Técnico de desenvolvimento de sistemas")
let professor1 = new Professor('632tr76t','Mestrado','Engenharia de Software','João da Silva',45,'12345678900')
let tecnico1 = new tecnicoAdm('789klm012','Doutorado','Administração',35,'ydg733r313')


aluno1.imprimeinfo();
professor1.imprimeinfo();
tecnico1.imprimeinfo();

