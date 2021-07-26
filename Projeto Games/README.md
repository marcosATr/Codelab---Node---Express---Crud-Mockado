
# CRUD mockado com node.js e express.js

  

Principais abordagens:

- Separation of concerns,
- Monitoramento de IDs:
	- Apenas permite a deleção quando as IDs correspondem a um item válido.
	- Em caso de CREATE, procura a próxima ID válida disponível, preenchendo GAPS na sequência de IDs.
	- Atribuição automática de IDs, simulando um bando de dados.
- Rotas compostas organizadas e legíveis.

![CRUD mockado node.js e express.js](https://i.imgur.com/5wWCRFp.png)
