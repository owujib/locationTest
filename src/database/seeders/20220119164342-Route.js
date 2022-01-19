'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      'Routes',
      [
        {
          location: Sequelize.fn('ST_GeomFromText', 'POINT(6.631810 3.391930)'),
          street_name: 'Bonny Camp Bus Stop, Lagos, Nigeria',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          location: Sequelize.fn('ST_GeomFromText', 'POINT(6.433280 3.522600)'),
          street_name: 'Igbo-Efon Health Centre, Baale Street, Lekki, Nigeria',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          location: Sequelize.fn('ST_GeomFromText', 'POINT(6.534510 3.378830)'),
          street_name: 'Aiyepe Avenue, Lagos, Nigeria',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          location: Sequelize.fn('ST_GeomFromText', 'POINT(6.581490 3.344060)'),
          street_name: 'Abijo G. R. A. Road, Lagos, Nigeria ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          location: Sequelize.fn('ST_GeomFromText', 'POINT(6.465894 3.561445)'),
          street_name: 'Ilaje Bus Stop, Ajah, Lagos',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          location: Sequelize.fn(
            'ST_GeomFromText',
            'POINT(6.430859 3.4278148)',
          ),
          street_name: 'Brt Bus Station, Victoria Island, Lagos, Nigeria',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          location: Sequelize.fn(
            'ST_GeomFromText',
            'POINT(6.4308856 3.4212487)',
          ),
          street_name: 'Law School, Lagos, Nigeria',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          location: Sequelize.fn(
            'ST_GeomFromText',
            'POINT(6.4502409 3.4535067)',
          ),
          street_name: 'Lekki Phase 1, Lekki, Nigeria',

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          location: Sequelize.fn(
            'ST_GeomFromText',
            'POINT(6.4358682 3.4418136)',
          ),
          street_name:
            'Tizlehad Timeless Elegance, Lekki - Epe Expressway, Lagos, Nigeria',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          location: Sequelize.fn(
            'ST_GeomFromText',
            'POINT(6.457298 3.6052535)',
          ),
          street_name: 'Sangotedo, Nigeria',

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          location: Sequelize.fn(
            'ST_GeomFromText',
            'POINT(6.4671622 3.585341)',
          ),
          street_name: 'Abraham Adesanya Estate',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          location: Sequelize.fn(
            'ST_GeomFromText',
            'POINT(6.4279964 3.4063877)',
          ),
          street_name: 'Silverbird Galleria, Ahmadu Bello Way, Lagos, Nigeria',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
