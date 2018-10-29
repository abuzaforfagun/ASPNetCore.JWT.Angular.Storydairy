FROM microsoft/dotnet:sdk AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:sdk AS build
WORKDIR /src
COPY Solution.sln ./
COPY StoryDairy.Core/*.csproj ./StoryDairy.Core/
COPY StoryDairy/*.csproj ./StoryDairy/

RUN dotnet restore
COPY . .
WORKDIR /src/StoryDairy.Core
RUN dotnet build -c Release -o /app

WORKDIR /src/StoryDairy
RUN dotnet build -c Release -o /app

FROM build AS publish
RUN dotnet publish -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "StoryDairy.dll"]