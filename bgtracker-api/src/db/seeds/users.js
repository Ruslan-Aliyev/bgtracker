exports.seed = knex => {
	return knex('users')
		.del()
		.then(() => {
			return knex('users').insert([
				{
					id:1,
					email:"ruslan_aliyev_@hotmail.com",
					username:"ruslan",
					password:"xx"
				}
			]);
		});
};
