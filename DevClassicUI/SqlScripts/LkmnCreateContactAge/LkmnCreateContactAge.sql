create or alter view LkmnVwContactAgeDays
as

select Id as LkmnId, Name as LkmnName, BirthDate as LkmnBirthDate,
datediff(day, BirthDate, getdate()) as LkmnAgeDays
from Contact