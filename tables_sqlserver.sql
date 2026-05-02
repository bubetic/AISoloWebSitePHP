-- Schema for Azure SQL Database (SQL Server) - dmsite
-- Run in Azure Portal Query editor, SSMS, or Azure Data Studio.

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'users')
BEGIN
    CREATE TABLE dbo.users (
        id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
        name NVARCHAR(255) NOT NULL,
        email NVARCHAR(255) NOT NULL UNIQUE,
        password NVARCHAR(255) NOT NULL,
        verified BIT NOT NULL CONSTRAINT DF_users_verified DEFAULT (0)
    );
END;
GO

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'loginattempts')
BEGIN
    CREATE TABLE dbo.loginattempts (
        id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
        [user] BIGINT NULL,
        ip NVARCHAR(255) NULL,
        [timestamp] INT NULL
    );
END;
GO

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'requests')
BEGIN
    CREATE TABLE dbo.requests (
        id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
        [user] BIGINT NULL,
        hash NVARCHAR(255) NULL,
        [timestamp] INT NULL,
        [type] INT NULL
    );
END;
GO

