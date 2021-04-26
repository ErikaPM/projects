import requests 

session=requests.Session()
response=session.get('https://www.superfinanciera.gov.co/Superfinanciera-Tasas/generic/activeInterestRates.seam')

print(session.cookies.get_dict())

r = session.post('https://www.superfinanciera.gov.co/Superfinanciera-Tasas/generic/activeInterestRates.seam', 
data = {'LoanPortfolioForm': 'LoanPortfolioForm', 'LoanPortfolioForm:j_id22': 'Generar Reporte en Excel', 
'javax.faces.ViewState': 'j_id4'})
print(r.content)