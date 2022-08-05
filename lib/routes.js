export const login = {
    init: [
        'https://skolplattformen.stockholm.se/',
        'https://elevstockholm.sharepoint.com/sites/skolplattformen/',
        'https://elevstockholm.sharepoint.com/sites/skolplattformen/_layouts/15/Authenticate.aspx?Source=%2Fsites%2Fskolplattformen%2F',
        'https://elevstockholm.sharepoint.com/_forms/default.aspx?ReturnUrl=%2fsites%2fskolplattformen%2f_layouts%2f15%2fAuthenticate.aspx%3fSource%3d%252Fsites%252Fskolplattformen%252F&Source=cookie'
    ],
    loginLiveDotCom: 'https://login.live.com/Me.htm?v=3',
    getCredentials: 'https://login.microsoftonline.com/common/GetCredentialType?mkt=en-US',
    stockholmLogin: stockholmLogin`https://login001.stockholm.se/siteminderagent/forms/aelever.jsp?SMAUTHREASON=0&SMAGENTNAME=IfNE0iMOtzq2TcxFADHylR6rkmFtwzoxRKh5nRMO9NBqIxHrc38jFyt56FASdxk1&SMQUERYDATA=null&TARGET=https://login001.stockholm.se/affwebservices/redirectjsp/eduadfs.jsp?SMPORTALURL=https%3A%2F%2Flogin001.stockholm.se%2Faffwebservices%2Fpublic%2Fsaml2sso&SAMLTRANSACTIONID=${samlTransactionId}`,
    stockholmUserPasswordLoginForm: stockholmUserPasswordLoginForm`https://login001.stockholm.se/siteminderagent/forms/loginForm.jsp?SMAGENTNAME=IfNE0iMOtzq2TcxFADHylR6rkmFtwzoxRKh5nRMO9NBqIxHrc38jFyt56FASdxk1&POSTTARGET=https://login001.stockholm.se/NECSelev/form/b64startpage.jsp?startpage=aHR0cHM6Ly9sb2dpbjAwMS5zdG9ja2hvbG0uc2UvYWZmd2Vic2VydmljZXMvcmVkaXJlY3Rqc3AvZWR1YWRmcy5qc3A/U01QT1JUQUxVUkw9aHR0cHMlM0ElMkYlMkZsb2dpbjAwMS5zdG9ja2hvbG0uc2UlMkZhZmZ3ZWJzZXJ2aWNlcyUyRnB1YmxpYyUyRnNhbWwyc3NvJlNBTUxUUkFOU0FDVElPTklEPTEwMjkwNThjLTM0MTg2YWFhLTRmYWRiYzY5LTRkN2RkMDU3LTczYmRkNGQ3LTA1MA==&TARGET=https://login001.stockholm.se/affwebservices/redirectjsp/eduadfs.jsp?SMPORTALURL=https%3A%2F%2Flogin001.stockholm.se%2Faffwebservices%2Fpublic%2Fsaml2sso&SAMLTRANSACTIONID=${samlTransactionId}`,
    stockholmUSerPasswordLoginApi: 'https://login001.stockholm.se/siteminderagent/forms/login.fcc',



}