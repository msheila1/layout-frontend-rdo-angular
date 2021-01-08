import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { AppComponent } from './app.component';
import { PanelmenudemoComponent } from './panelmenudemo/panelmenudemo.component';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { LightboxModule } from 'primeng/lightbox';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { HttpConfigInterceptor} from './core/interceptor/httpconfig.interceptor';
import { PickListModule } from 'primeng/picklist';
import {SpinnerModule} from 'primeng/spinner';
import { LoginComponent } from './login/login.component';
import { CadastroBoRapidoComponent } from './cadastro-bo-rapido/cadastro-bo-rapido.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CadastroRapidoComponent } from './cadastro-rapido/cadastro-rapido.component';
import { NaturezaComponent } from './cadastro/natureza/natureza.component';
import { ObservacoesComponent } from './cadastro/observacoes/observacoes.component';
import { ModusOperandiComponent } from './cadastro/modus-operandi/modus-operandi.component';
import { PessoajuridicaComponent } from './cadastro/pessoajuridica/pessoajuridica.component';
import { EntorpecentesComponent } from './cadastro/entorpecentes/entorpecentes.component';
import { ArmaseacessoriosComponent } from './cadastro/armaseacessorios/armaseacessorios.component';
import { ObjetosComponent } from './cadastro/objetos/objetos.component';
//import { CargaComponent } from './cadastro/carga/carga.component';
import { PessoasComponent } from './cadastro/pessoas/pessoas.component';
import { BuscarpessoasComponent } from './pesquisar/buscarpessoas/buscarpessoas.component';
import { BuscarRdoComponent } from './pesquisar/buscarRdo/buscarRdo.component';
import { VMessageComponent } from './shared/components/vmessage/vmessage.component';
import { NomePessoaComponent } from './pesquisar/buscarRdo/nomePessoa/nomePessoa.component';
import { NumeroRdoComponent } from './pesquisar/buscarRdo/numeroRdo/numeroRdo.component';
import { RgPessoaComponent } from './pesquisar/buscarRdo/rgPessoa/rgPessoa.component';
import { CpfPessoaComponent } from './pesquisar/buscarRdo/cpfPessoa/cpfPessoa.component';
import { VeiculoRdoComponent } from './pesquisar/buscarRdo/veiculoRdo/veiculoRdo.component';
import { DataHoraComponent } from './pesquisar/buscarRdo/dataHora/dataHora.component';
import { CircunscricaoComponent } from './pesquisar/buscarRdo/circunscricao/circunscricao.component';
import { EmpresaComponent } from './pesquisar/buscarRdo/empresa/empresa.component';
import { ObjetoComponent } from './pesquisar/buscarRdo/objeto/objeto.component';
import { NumeroArmaComponent } from './pesquisar/buscarRdo/numeroArma/numeroArma.component';
import { BuscarVeiculosComponent } from './pesquisar/buscarVeiculos/buscarVeiculos.component';
import { BuscarArmasComponent } from './pesquisar/buscarArmas/buscarArmas.component';
import { AccordionAbordagemComponent } from './shared/components/accordion-abordagem/accordion-abordagem.component';
import { AccordionAcessoComponent } from './shared/components/accordion-acesso/accordion-acesso.component';
import { AccordionAcionamentoComponent } from './shared/components/accordion-acionamento/accordion-acionamento.component';
//import { AccordionCargaComponent } from './shared/components/accordion-carga/accordion-carga.component';
import { AccordionCargaVitimaComponent } from './shared/components/accordion-carga-vitima/accordion-carga-vitima.component';
import { AccordionCaracteristicaPsicologiaComponent } from './shared/components/accordion-caracteristica-psicologica/accordion-caracteristica-psicologica.component';
import { AccordionCoacaoComponent } from './shared/components/accordion-coacao/accordion-coacao.component';
import { AccordionFerimentoComponent } from './shared/components/accordion-ferimento/accordion-ferimento.component';
import { AccordionGeraisPessoasComponent } from './shared/components/accordion-gerais-pessoas/accordion-gerais-pessoas.component';
import { AccordionGeraisVitimaComponent } from './shared/components/accordion-gerais-vitima/accordion-gerais-vitima.component';
import { AccordionModusOperandiComponent } from './shared/components/accordion-modus-operandi/accordion-modus-operandi.component';
import { AccordionLinguagemComponent } from './shared/components/accordion-linguagem/accordion-linguagem.component';
import { AccordionInstrumentoComponent } from './shared/components/accordion-instrumento/accordion-instrumento.component';
import { AccordionInstrumentoAutorComponent } from './shared/components/accordion-instrumento-autor/accordion-instrumento-autor.component';
import { AccordionRelacionamentoComponent } from './shared/components/accordion-relacionamento/accordion-relacionamento.component';
import { AccordionSegurancaComponent } from './shared/components/accordion-seguranca/accordion-seguranca.component';
import { AccordionTelefoneComponent } from './shared/components/accordion-telefone/accordion-telefone.component';
import { DialogPlantonistaComponent } from './shared/components/dialog-plantonista/dialog-plantonista.component';
import { DialogAcessoComponent } from './shared/components/dialog-acesso/dialog-acesso.component';
import { DialogAcionamentoComponent } from './shared/components/dialog-acionamento/dialog-acionamento.component';
import { DialogArmasAcessoriosComponent } from './shared/components/dialog-armas-acessorios/dialog-armas-acessorios.component'
//import { DialogCargaComponent } from './shared/components/dialog-carga/dialog-carga.component';
import { DialogDelegaciaComponent } from './shared/components/dialog-delegacia/dialog-delegacia.component';
import { DialogLogradouroComponent } from './shared/components/dialog-logradouro/dialog-logradouro.component';
import { DialogPessoaComponent } from './shared/components/dialog-pessoa/dialog-pessoa.component';
import { DialogEnderecoComponent } from './shared/components/dialog-endereco/dialog-endereco.component';
import { DialogEntorpecentesComponent } from './shared/components/dialog-entorpecentes/dialog-entorpecentes.component';
import { DialogTelefoneComponent } from './shared/components/dialog-telefone/dialog-telefone.component';
import { DialogTelefonePessoaComponent } from './shared/components/dialog-telefone-pessoa/dialog-telefone-pessoa.component';
import { DialogVestuarioComponent } from './shared/components/dialog-vestuario/dialog-vestuario.component';
import { DialogAdornoComponent } from './shared/components/dialog-adorno/dialog-adorno.component';
import { DialogCaracteristicaPessoaComponent } from './shared/components/dialog-caracteristica-pessoa/dialog-caracteristica-pessoa.component';
import { DialogPastologiaComponent } from './shared/components/dialog-pastologia/dialog-pastologia.component';
import { DialogContaBancariaComponent } from './shared/components/dialog-conta-bancaria/dialog-conta-bancaria.component';
import { DialogCartaoCreditoComponent } from './shared/components/dialog-cartao-credito/dialog-cartao-credito.component';
import { DialogModusOperandiComponent } from './shared/components/dialog-modus-operandi/dialog-modus-operandi.component';
import { DialogLocalPessoaComponent } from './shared/components/dialog-local-pessoa/dialog-local-pessoa.component';
import { DialogToxicoComponent } from './shared/components/dialog-toxico/dialog-toxico.component';
import { DialogJogoComponent } from './shared/components/dialog-jogo/dialog-jogo.component';
import { DialogTelefoneAutorComponent } from './shared/components/dialog-telefone-autor/dialog-telefone-autor.component';
import { DialogRuidoComponent } from './shared/components/dialog-ruido/dialog-ruido.component';
import { DialogAbordagemComponent } from './shared/components/dialog-abordagem/dialog-abordagem.component';
import { DialogInstrumentoComponent } from './shared/components/dialog-instrumento/dialog-instrumento.component';
import { DialogInstrumentoVeiculoComponent } from './shared/components/dialog-instrumento-veiculo/dialog-instrumento-veiculo.component';
import { DialogCoacaoComponent } from './shared/components/dialog-coacao/dialog-coacao.component';
import { DialogPsicologicaComponent } from './shared/components/dialog-psicologica/dialog-psicologica.component';
import { DialogFerimentoComponent } from './shared/components/dialog-ferimento/dialog-ferimento.component';
import { DialogRelacionamentoComponent } from './shared/components/dialog-relacionamento/dialog-relacionamento.component';
import { DialogBuscarPessoaComponent } from './shared/components/dialog-buscar-pessoa/dialog-buscar-pessoa.component';
import { DialogBuscarVeiculoComponent } from './shared/components/dialog-buscar-veiculo/dialog-buscar-veiculo.component';
import { DialogBuscarMarcaComponent } from './shared/components/dialog-buscar-marca/dialog-buscar-marca.component';
import { DialogBuscarArmasComponent } from './shared/components/dialog-buscar-armas/dialog-buscar-armas.component';
import { DialogSegurancaComponent } from './shared/components/dialog-seguranca/dialog-seguranca.component';
import { DialogObjetoComponent } from './shared/components/dialog-objeto/dialog-objeto.component';
import { DialogObjetoImportacaoComponent } from './shared/components/dialog-objeto-importacao/dialog-objeto-importacao.component';
import { DialogPessoaJuridicaComponent } from './shared/components/dialog-pessoa-juridica/dialog-pessoa-juridica.component';
import { DialogObservacoesComponent } from './shared/components/dialog-observacoes/dialog-observacoes.component';
import { TieredMenuModule } from 'primeng/primeng';
import { TableCaracteristicaFisiscaComponent } from './shared/components/table-caracteristica-fisica/table-caracteristica-fisica.component';
import { TableCartaoCreditoComponent } from './shared/components/table-cartao-credito/table-cartao-credito.component';
import { TableContaBanariaComponent } from './shared/components/table-conta-bancaria/table-conta-bancaria.component';
import { TableEnderecoComponent } from './shared/components/table-endereco/table-endereco.component';
import { TableLocalPessoaComponent } from './shared/components/table-local-pessoa/table-local-pessoa.component';
import { TableTelefoneComponent } from './shared/components/table-telefone/table-telefone.component';
import { TableJogosComponent } from './shared/components/table-jogos/table-jogos.component';
import { TableToxicoComponent } from './shared/components/table-toxico/table-toxico.component';
import { TableViaturaComponent } from './shared/components/table-viatura/table-viatura.component';

import { SecaoAlterarSenhaComponent } from './shared/components/secao-alterar-senha/secao-alterar-senha.component';
import { initializer } from './core/utils/app-init';
import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { AuthService } from './core/services/auth.service';
import { LoaderService } from './core/loader/loader.service';
import { NumbersOnlyDirective } from './core/directives/numbers-only.directive';

// Module do Sistema RDO
import { HomeModule } from './home/home.module';
import { PlantaoModule } from './plantao/plantao.module';
import { AgmCoreModule } from '@agm/core';
import { PerfilModule } from './perfil/perfil.module';
import { MessagesModule } from './messages/messages.module';
import { RdoCommonModule } from './shared/modules/rdo-common.module';
import { RolePermissionDirective } from './core/directives/role-permission.directive';
import { CadastroCompletoModule } from './cadastro/cadastro.module';
import { BoletimocorrenciaModule } from './cadastro/boletimocorrencia/boletimocorrencia.module';
import { VeiculosModule } from './cadastro/veiculos/veiculos.module';


@NgModule({
  declarations: [
    AppComponent,
    PanelmenudemoComponent,
    LoginComponent,
    CadastroBoRapidoComponent,
    HomeComponent,
    FooterComponent,
    CadastroRapidoComponent,
    NaturezaComponent,
    ObservacoesComponent,
    ModusOperandiComponent,
    PessoajuridicaComponent,
    EntorpecentesComponent,
    ArmaseacessoriosComponent,
    ObjetosComponent,
    //CargaComponent,
    PessoasComponent,
    BuscarpessoasComponent,
    BuscarRdoComponent,
    VMessageComponent,
    NomePessoaComponent,
    NumeroRdoComponent,
    RgPessoaComponent,
    CpfPessoaComponent,
    VeiculoRdoComponent,
    DataHoraComponent,
    CircunscricaoComponent,
    EmpresaComponent,
    ObjetoComponent,
    NumeroArmaComponent,
    BuscarVeiculosComponent,
    BuscarArmasComponent,
    AccordionAbordagemComponent,
    AccordionAcessoComponent,
    AccordionAcionamentoComponent,
    //AccordionCargaComponent,
    AccordionCargaVitimaComponent,
    AccordionCaracteristicaPsicologiaComponent,
    AccordionCoacaoComponent,
    AccordionFerimentoComponent,
    AccordionGeraisPessoasComponent,
    AccordionGeraisVitimaComponent,
    AccordionModusOperandiComponent,
    AccordionLinguagemComponent,
    AccordionInstrumentoComponent,
    AccordionInstrumentoAutorComponent,
    AccordionRelacionamentoComponent,
    AccordionSegurancaComponent,
    AccordionTelefoneComponent,
    DialogAcionamentoComponent,
    DialogArmasAcessoriosComponent,
    //DialogCargaComponent,
    DialogDelegaciaComponent,
    DialogPlantonistaComponent,
    DialogLogradouroComponent,
    DialogModusOperandiComponent,
    DialogPessoaComponent,
    DialogEnderecoComponent,
    DialogEntorpecentesComponent,
    DialogTelefoneComponent,
    DialogTelefonePessoaComponent,
    DialogVestuarioComponent,
    DialogAdornoComponent,
    DialogCaracteristicaPessoaComponent,
    DialogPastologiaComponent,
    DialogContaBancariaComponent,
    DialogCartaoCreditoComponent,
    DialogLocalPessoaComponent,
    DialogToxicoComponent,
    DialogJogoComponent,
    DialogTelefoneAutorComponent,
    DialogRuidoComponent,
    DialogAbordagemComponent,
    DialogInstrumentoComponent,
    DialogInstrumentoVeiculoComponent,
    DialogCoacaoComponent,
    DialogPsicologicaComponent,
    DialogFerimentoComponent,
    DialogRelacionamentoComponent,
    DialogBuscarArmasComponent,
    DialogBuscarPessoaComponent,
    DialogBuscarVeiculoComponent,
    DialogBuscarMarcaComponent,
    DialogSegurancaComponent,
    DialogAcessoComponent,
    DialogObjetoComponent,
    DialogObjetoImportacaoComponent,
    DialogPessoaJuridicaComponent,
    DialogObservacoesComponent,
    TableCartaoCreditoComponent,
    TableContaBanariaComponent,
    TableCaracteristicaFisiscaComponent,
    TableEnderecoComponent,
    TableLocalPessoaComponent,
    TableTelefoneComponent,
    TableJogosComponent,
    TableToxicoComponent,
    TableViaturaComponent,
    SecaoAlterarSenhaComponent,
    NumbersOnlyDirective,
    RolePermissionDirective
  ],
  imports: [
    RdoCommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    PanelModule,
    AppRoutingModule,
    AccordionModule,
    CardModule,
    FormsModule,
    TableModule,
    ChartModule,
    ButtonModule,
    FieldsetModule,
    DropdownModule,
    CalendarModule,
    RadioButtonModule,
    DialogModule,
    InputTextModule,
    InputSwitchModule,
    InputTextareaModule,
    TabViewModule,
    ToastModule,
    CheckboxModule,
    LightboxModule,
    SplitButtonModule,
    ToolbarModule,
    TooltipModule,
    FileUploadModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    HttpClientModule,
    GooglePlaceModule,
    KeycloakAngularModule,
    PickListModule,
    SpinnerModule,
    HomeModule,
    CadastroCompletoModule,
    PlantaoModule,
    PerfilModule,
    MessagesModule,
    TieredMenuModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAexZ4KZot11RpJfyR-LeKoKZhuzMOfpSc',
       libraries: ["places"]
   }),
   BoletimocorrenciaModule,
   VeiculosModule
  ],
  providers: [
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true, deps: [AuthService, MessageService, LoaderService ]  },
    { provide: APP_INITIALIZER, useFactory: initializer, multi: true, deps: [KeycloakService] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
