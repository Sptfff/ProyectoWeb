import React, { useState } from 'react';
import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';

const regions = [
  //Regiones de Chile
  { id: '1', name: 'Región de Tarapacá' },
  { id: '2', name: 'Región de Antofagasta'},
  { id: '3', name: 'Región de Atacama'},
  { id: '4', name: 'Región de Coquimbo'},
  { id: '5', name: 'Región de Valparaíso'},
  { id: '6', name: "Región del Libertador General Bernardo O'Higgins"},
  { id: '7', name: 'Región del Maule'},
  { id: '8', name: 'Región del Biobío'},
  { id: '9', name: 'Región de La Araucanía'},
  { id: '10', name: 'Región de Los Lagos'},
  { id: '11', name: 'Región de Aysén del General Carlos Ibáñez del Campo'},
  { id: '12', name: 'Región de Magallanes y de la Antártica Chilena'},
  { id: '13', name: 'Región Metropolitana de Santiago'},
  { id: '14', name: 'Región de Los Ríos'},
  { id: '15', name: 'Región de Arica y Parinacota'},
  { id: '16', name: 'Región de Ñuble'},
];


const comunas = {
  '1': [
    // Comunas de Tarapacá
    { id: '1', name: 'Iquique' },
    { id: '2', name: 'Alto Hospicio' },
    { id: '3', name: 'Pozo Almonte' },
    { id: '4', name: 'Camiña' },
    { id: '5', name: 'Colchane' },
    { id: '6', name: 'Huara' },
    { id: '7', name: 'Pica' },
  ],
  // Comunas de Antofagasta
  '2': [
    // Antofagasta
    { id: '1', name: 'Antofagasta' },
    { id: '2', name: 'Mejillones' },
    { id: '3', name: 'Sierra Gorda' },
    { id: '4', name: 'Taltal' },
    { id: '5', name: 'Calama' },
    { id: '6', name: 'Ollagüe' },
    { id: '7', name: 'San Pedro de Atacama' },
    { id: '8', name: 'Tocopilla' },
    { id: '9', name: 'María Elena' },
  ],
  '3': [
    // Comunas de Atacama
    { id: '1', name: 'Copiapó' },
    { id: '2', name: 'Caldera' },
    { id: '3', name: 'Tierra Amarilla' },
    { id: '4', name: 'Chañaral' },
    { id: '5', name: 'Diego de Almagro' },
    { id: '6', name: 'Vallenar' },
    { id: '7', name: 'Alto del Carmen' },
    { id: '8', name: 'Freirina' },
    { id: '9', name: 'Huasco' },
  ],
  '4': [
    // Comunas de Coquimbo
    { id: '1', name: 'La Serena' },
    { id: '2', name: 'Coquimbo' },
    { id: '3', name: 'Andacollo' },
    { id: '4', name: 'La Higuera' },
    { id: '5', name: 'Paihuano' },
    { id: '6', name: 'Vicuña' },
    { id: '7', name: 'Illapel' },
    { id: '8', name: 'Canela' },
    { id: '9', name: 'Los Vilos' },
    { id: '10', name: 'Salamanca' },
    { id: '11', name: 'Ovalle' },
    { id: '12', name: 'Combarbalá' },
    { id: '13', name: 'Monte Patria' },
    { id: '14', name: 'Punitaqui' },
    { id: '15', name: 'Río Hurtado' },
  ],
  '5': [
    // Comunas de Valparaíso
    { id: '1', name: 'Valparaíso' },
    { id: '2', name: 'Casablanca' },
    { id: '3', name: 'Concón' },
    { id: '4', name: 'Juan Fernández' },
    { id: '5', name: 'Puchuncaví' },
    { id: '6', name: 'Quintero' },
    { id: '7', name: 'Viña del Mar' },
    { id: '8', name: 'Isla de Pascua' },
    { id: '9', name: 'Los Andes' },
    { id: '10', name: 'Calle Larga' },
    { id: '11', name: 'Rinconada' },
    { id: '12', name: 'San Esteban' },
    { id: '13', name: 'La Ligua' },
    { id: '14', name: 'Cabildo' },
    { id: '15', name: 'Papudo' },
    { id: '16', name: 'Petorca' },
    { id: '17', name: 'Zapallar' },
    { id: '18', name: 'Quillota' },
    { id: '19', name: 'La Calera' },
    { id: '20', name: 'Hijuelas' },
    { id: '21', name: 'La Cruz' },
    { id: '22', name: 'Nogales' },
    { id: '23', name: 'San Antonio' },
    { id: '24', name: 'Algarrobo' },
    { id: '25', name: 'Cartagena' },
    { id: '26', name: 'El Quisco' },
    { id: '27', name: 'El Tabo' },
    { id: '28', name: 'Santo Domingo' },
    { id: '29', name: 'San Felipe' },
    { id: '30', name: 'Catemu' },
    { id: '31', name: 'Llaillay' },
    { id: '32', name: 'Panquehue' },
    { id: '33', name: 'Putaendo' },
    { id: '34', name: 'Santa María' },
    { id: '35', name: 'Quilpué' },
    { id: '36', name: 'Limache' },
    { id: '37', name: 'Olmué' },
    { id: '38', name: 'Villa Alemana' },
  ],
  '6': [
    // Comunas del Libertador General Bernardo O'Higgins
    { id: '1', name: 'Rancagua' },
    { id: '2', name: 'Codegua' },
    { id: '3', name: 'Coinco' },
    { id: '4', name: 'Coltauco' },
    { id: '5', name: 'Doñihue' },
    { id: '6', name: 'Graneros' },
    { id: '7', name: 'Las Cabras' },
    { id: '8', name: 'Machalí' },
    { id: '9', name: 'Malloa' },
    { id: '10', name: 'Mostazal' },
    { id: '11', name: 'Olivar' },
    { id: '12', name: 'Peumo' },
    { id: '13', name: 'Pichidegua' },
    { id: '14', name: 'Quinta de Tilcoco' },
    { id: '15', name: 'Rengo' },
    { id: '16', name: 'Requínoa' },
    { id: '17', name: 'San Vicente' },
    { id: '18', name: 'Pichilemu' },
    { id: '19', name: 'La Estrella' },
    { id: '20', name: 'Litueche' },
    { id: '21', name: 'Marchihue' },
    { id: '22', name: 'Navidad' },
    { id: '23', name: 'Paredones' },
    { id: '24', name: 'San Fernando' },
    { id: '25', name: 'Chépica' },
    { id: '26', name: 'Chimbarongo' },
    { id: '27', name: 'Lolol' },
    { id: '28', name: 'Nancagua' },
    { id: '29', name: 'Palmilla' },
    { id: '30', name: 'Peralillo' },
    { id: '31', name: 'Placilla' },
    { id: '32', name: 'Pumanque' },
    { id: '33', name: 'Santa Cruz' },
  ],
  '7': [
    // Comunas de Maule
    { id: '1', name: 'Talca' },
    { id: '2', name: 'Constitución' },
    { id: '3', name: 'Curepto' },
    { id: '4', name: 'Empedrado' },
    { id: '5', name: 'Maule' },
    { id: '6', name: 'Pelarco' },
    { id: '7', name: 'Pencahue' },
    { id: '8', name: 'Río Claro' },
    { id: '9', name: 'San Clemente' },
    { id: '10', name: 'San Rafael' },
    { id: '11', name: 'Cauquenes' },
    { id: '12', name: 'Chanco' },
    { id: '13', name: 'Pelluhue' },
    { id: '14', name: 'Curicó' },
    { id: '15', name: 'Hualañé' },
    { id: '16', name: 'Licantén' },
    { id: '17', name: 'Molina' },
    { id: '18', name: 'Rauco' },
    { id: '19', name: 'Romeral' },
    { id: '20', name: 'Sagrada Familia' },
    { id: '21', name: 'Teno' },
    { id: '22', name: 'Vichuquén' },
    { id: '23', name: 'Linares' },
    { id: '24', name: 'Colbún' },
    { id: '25', name: 'Longaví' },
    { id: '26', name: 'Parral' },
    { id: '27', name: 'Retiro' },
    { id: '28', name: 'San Javier' },
    { id: '29', name: 'Villa Alegre' },
    { id: '30', name: 'Yerbas Buenas' },
  ],
  '8': [
    // Comunas de Biobío
    { id: '1', name: 'Concepción' },
    { id: '2', name: 'Coronel' },
    { id: '3', name: 'Chiguayante' },
    { id: '4', name: 'Florida' },
    { id: '5', name: 'Hualqui' },
    { id: '6', name: 'Lota' },
    { id: '7', name: 'Penco' },
    { id: '8', name: 'San Pedro de la Paz' },
    { id: '9', name: 'Santa Juana' },
    { id: '10', name: 'Talcahuano' },
    { id: '11', name: 'Tomé' },
    { id: '12', name: 'Hualpén' },
    { id: '13', name: 'Lebu' },
    { id: '14', name: 'Arauco' },
    { id: '15', name: 'Cañete' },
    { id: '16', name: 'Contulmo' },
    { id: '17', name: 'Curanilahue' },
    { id: '18', name: 'Los Álamos' },
    { id: '19', name: 'Tirúa' },
    { id: '20', name: 'Los Ángeles' },
    { id: '21', name: 'Antuco' },
    { id: '22', name: 'Cabrero' },
    { id: '23', name: 'Laja' },
    { id: '24', name: 'Mulchén' },
    { id: '25', name: 'Nacimiento' },
    { id: '26', name: 'Negrete' },
    { id: '27', name: 'Quilaco' },
    { id: '28', name: 'Quilleco' },
    { id: '29', name: 'San Rosendo' },
    { id: '30', name: 'Santa Bárbara' },
    { id: '31', name: 'Tucapel' },
    { id: '32', name: 'Yumbel' },
    { id: '33', name: 'Alto Biobío' },
  ],
  '9': [
    // Comunas de La Araucanía
    { id: '1', name: 'Temuco' },
    { id: '2', name: 'Carahue' },
    { id: '3', name: 'Cunco' },
    { id: '4', name: 'Curarrehue' },
    { id: '5', name: 'Freire' },
    { id: '6', name: 'Galvarino' },
    { id: '7', name: 'Gorbea' },
    { id: '8', name: 'Lautaro' },
    { id: '9', name: 'Loncoche' },
    { id: '10', name: 'Melipeuco' },
    { id: '11', name: 'Nueva Imperial' },
    { id: '12', name: 'Padre Las Casas' },
    { id: '13', name: 'Perquenco' },
    { id: '14', name: 'Pitrufquén' },
    { id: '15', name: 'Pucón' },
    { id: '16', name: 'Saavedra' },
    { id: '17', name: 'Teodoro Schmidt' },
    { id: '18', name: 'Toltén' },
    { id: '19', name: 'Vilcún' },
    { id: '20', name: 'Villarrica' },
    { id: '21', name: 'Cholchol' },
    { id: '22', name: 'Angol' },
    { id: '23', name: 'Collipulli' },
    { id: '24', name: 'Curacautín' },
    { id: '25', name: 'Ercilla' },
    { id: '26', name: 'Lonquimay' },
    { id: '27', name: 'Los Sauces' },
    { id: '28', name: 'Lumaco' },
    { id: '29', name: 'Purén' },
    { id: '30', name: 'Renaico' },
    { id: '31', name: 'Traiguén' },
    { id: '32', name: 'Victoria' },
  ],
  '10': [
    // Coumna de Los Lagos
    { id: '1', name: 'Puerto Montt' },
    { id: '2', name: 'Calbuco' },
    { id: '3', name: 'Cochamó' },
    { id: '4', name: 'Fresia' },
    { id: '5', name: 'Frutillar' },
    { id: '6', name: 'Los Muermos' },
    { id: '7', name: 'Llanquihue' },
    { id: '8', name: 'Maullín' },
    { id: '9', name: 'Puerto Varas' },
    { id: '10', name: 'Castro' },
    { id: '11', name: 'Ancud' },
    { id: '12', name: 'Chonchi' },
    { id: '13', name: 'Curaco de Vélez' },
    { id: '14', name: 'Dalcahue' },
    { id: '15', name: 'Puqueldón' },
    { id: '16', name: 'Queilén' },
    { id: '17', name: 'Quellón' },
    { id: '18', name: 'Quemchi' },
    { id: '19', name: 'Quinchao' },
    { id: '20', name: 'Osorno' },
    { id: '21', name: 'Puerto Octay' },
    { id: '22', name: 'Purranque' },
    { id: '23', name: 'Puyehue' },
    { id: '24', name: 'Río Negro' },
    { id: '25', name: 'San Juan de la Costa' },
    { id: '26', name: 'San Pablo' },
    { id: '27', name: 'Chaitén' },
    { id: '28', name: 'Futaleufú' },
    { id: '29', name: 'Hualaihué' },
    { id: '30', name: 'Palena' },
  ],
  '11': [
    // Comunas de Aysén del General Carlos Ibáñez del Campo
    { id: '1', name: 'Coyhaique' },
    { id: '2', name: 'Lago Verde' },
    { id: '3', name: 'Aysén' },
    { id: '4', name: 'Cisnes' },
    { id: '5', name: 'Guaitecas' },
    { id: '6', name: 'Cochrane' },
    { id: '7', name: 'O’Higgins' },
    { id: '8', name: 'Tortel' },
    { id: '9', name: 'Chile Chico' },
    { id: '10', name: 'Río Ibáñez' },
  ],
  '12': [
    // Comunas de Magallanes y de la Antártica Chilena
    { id: '1', name: 'Punta Arenas' },
    { id: '2', name: 'Laguna Blanca' },
    { id: '3', name: 'Río Verde' },
    { id: '4', name: 'San Gregorio' },
    { id: '5', name: 'Cabo de Hornos' },
    { id: '6', name: 'Antártica' },
    { id: '7', name: 'Porvenir' },
    { id: '8', name: 'Primavera' },
    { id: '9', name: 'Timaukel' },
    { id: '10', name: 'Natales' },
    { id: '11', name: 'Torres del Paine' },
  ],
  '13': [
    // Metropolitana
    { id: '1', name: 'Cerrillos' },
    { id: '2', name: 'Cerro Navia' },
    { id: '3', name: 'Conchalí' },
    { id: '4', name: 'El Bosque' },
    { id: '5', name: 'Estación Central' },
    { id: '6', name: 'Huechuraba' },
    { id: '7', name: 'Independencia' },
    { id: '8', name: 'La Cisterna' },
    { id: '9', name: 'La Florida' },
    { id: '10', name: 'La Granja' },
    { id: '11', name: 'La Pintana' },
    { id: '12', name: 'La Reina' },
    { id: '13', name: 'Las Condes' },
    { id: '14', name: 'Lo Barnechea' },
    { id: '15', name: 'Lo Espejo' },
    { id: '16', name: 'Lo Prado' },
    { id: '17', name: 'Macul' },
    { id: '18', name: 'Maipú' },
    { id: '19', name: 'Ñuñoa' },
    { id: '20', name: 'Pedro Aguirre Cerda' },
    { id: '21', name: 'Peñalolén' },
    { id: '22', name: 'Providencia' },
    { id: '23', name: 'Pudahuel' },
    { id: '24', name: 'Quilicura' },
    { id: '25', name: 'Quinta Normal' },
    { id: '26', name: 'Recoleta' },
    { id: '27', name: 'Renca' },
    { id: '28', name: 'San Joaquín' },
    { id: '29', name: 'San Miguel' },
    { id: '30', name: 'San Ramón' },
    { id: '31', name: 'Santiago' },
    { id: '32', name: 'Vitacura' },
    { id: '33', name: 'Puente Alto' },
    { id: '34', name: 'Pirque' },
    { id: '35', name: 'San José de Maipo' },
    { id: '36', name: 'Colina' },
    { id: '37', name: 'Lampa' },
    { id: '38', name: 'Tiltil' },
    { id: '39', name: 'San Bernardo' },
    { id: '40', name: 'Buin' },
    { id: '41', name: 'Calera de Tango' },
    { id: '42', name: 'Paine' },
    { id: '43', name: 'Melipilla' },
    { id: '44', name: 'Alhué' },
    { id: '45', name: 'Curacaví' },
    { id: '46', name: 'María Pinto' },
    { id: '47', name: 'San Pedro' },
    { id: '48', name: 'Talagante' },
    { id: '49', name: 'El Monte' },
    { id: '50', name: 'Isla de Maipo' },
    { id: '51', name: 'Padre Hurtado' },
    { id: '52', name: 'Peñaflor' },
  ],
  '14': [
    // Comuna de Los Ríos
    { id: '1', name: 'Valdivia' },
    { id: '2', name: 'Corral' },
    { id: '3', name: 'Lanco' },
    { id: '4', name: 'Los Lagos' },
    { id: '5', name: 'Máfil' },
    { id: '6', name: 'Mariquina' },
    { id: '7', name: 'Paillaco' },
    { id: '8', name: 'Panguipulli' },
    { id: '9', name: 'La Unión' },
    { id: '10', name: 'Futrono' },
    { id: '11', name: 'Lago Ranco' },
    { id: '12', name: 'Río Bueno' },
  ],
  '15': [
    // Arica y Parinacota
    { id: '1', name: 'Arica' },
    { id: '2', name: 'Camarones' },
    { id: '3', name: 'Putre' },
    { id: '4', name: 'General Lagos' },
  ],
  '16': [
    // Comunas de Ñuble
    { id: '1', name: 'Chillán' },
    { id: '2', name: 'Bulnes' },
    { id: '3', name: 'Cobquecura' },
    { id: '4', name: 'Coelemu' },
    { id: '5', name: 'Coihueco' },
    { id: '6', name: 'El Carmen' },
    { id: '7', name: 'Ninhue' },
    { id: '8', name: 'Ñiquén' },
    { id: '9', name: 'Pemuco' },
    { id: '10', name: 'Pinto' },
    { id: '11', name: 'Portezuelo' },
    { id: '12', name: 'Quillón' },
    { id: '13', name: 'Quirihue' },
    { id: '14', name: 'Ránquil' },
    { id: '15', name: 'San Carlos' },
    { id: '16', name: 'San Fabián' },
    { id: '17', name: 'San Ignacio' },
    { id: '18', name: 'San Nicolás' },
    { id: '19', name: 'Treguaco' },
    { id: '20', name: 'Yungay' },
    { id: '21', name: 'Chillán Viejo' },
  ],
};

interface RegionComunaSelectorProps {
  onRegionChange: (regionId: string) => void;
  onComunaChange: (comunaId: string) => void;
}

const RegionComunaSelector: React.FC<RegionComunaSelectorProps> = ({ onRegionChange, onComunaChange }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('');

  const handleRegionChange = (e: any) => {
    const regionId = e.detail.value;
    setSelectedRegion(regionId);
    onRegionChange(regionId);
  };

  const handleComunaChange = (e: any) => {
    const comunaId = e.detail.value;
    onComunaChange(comunaId);
  };

  return (
    <div>
      <IonItem>
        <IonSelect slot="start" value={selectedRegion} onIonChange={handleRegionChange} placeholder="Selecciona una región">
          {regions.map(region => (
            <IonSelectOption key={region.id} value={region.id}>
              {region.name}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>
      {selectedRegion && (
        <IonItem>
          <IonSelect slot="start" onIonChange={handleComunaChange} placeholder="Selecciona una comuna">
            {comunas[selectedRegion as keyof typeof comunas]?.map(comuna => (
              <IonSelectOption key={comuna.id} value={comuna.id}>
                {comuna.name}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>
      )}
    </div>
  );
};

export default RegionComunaSelector;
