window.BENCHMARK_DATA = {
  "lastUpdate": 1675943671099,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "e581e2ff21503c9d09359c2d463f759465e6f527",
          "message": "fix(deps): update dependency sqlglot to v11",
          "timestamp": "2023-02-09T06:48:04-05:00",
          "tree_id": "31f967eeb24650ed8fb1350f25806dd56daeb746",
          "url": "https://github.com/ibis-project/ibis/commit/e581e2ff21503c9d09359c2d463f759465e6f527"
        },
        "date": 1675943589635,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 129.1899670640206,
            "unit": "iter/sec",
            "range": "stddev: 0.0002899950121853801",
            "extra": "mean: 7.740539166671094 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5883458246404247,
            "unit": "iter/sec",
            "range": "stddev: 0.0011541190687807722",
            "extra": "mean: 1.6996806268 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 148.3893858265366,
            "unit": "iter/sec",
            "range": "stddev: 0.0005758575680576891",
            "extra": "mean: 6.7390264770620085 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.213801132403612,
            "unit": "iter/sec",
            "range": "stddev: 0.0006358484633905646",
            "extra": "mean: 108.53283955556019 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5960.03213132449,
            "unit": "iter/sec",
            "range": "stddev: 0.000050738136972641137",
            "extra": "mean: 167.78433034685187 usec\nrounds: 2567"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2000719.7757431988,
            "unit": "iter/sec",
            "range": "stddev: 1.7112553616156954e-8",
            "extra": "mean: 499.8201208004674 nsec\nrounds: 93458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7479189250895141,
            "unit": "iter/sec",
            "range": "stddev: 0.004452925489926125",
            "extra": "mean: 1.3370433163999906 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 88.15714296117324,
            "unit": "iter/sec",
            "range": "stddev: 0.00007747072091148954",
            "extra": "mean: 11.343380313951721 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 142.5856606260853,
            "unit": "iter/sec",
            "range": "stddev: 0.00012123177886166701",
            "extra": "mean: 7.013327957447182 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 44.322581939618566,
            "unit": "iter/sec",
            "range": "stddev: 0.000269131887224374",
            "extra": "mean: 22.56186251428939 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 974.4246813978884,
            "unit": "iter/sec",
            "range": "stddev: 0.00002546388544536523",
            "extra": "mean: 1.0262465833330716 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 251.91683660942167,
            "unit": "iter/sec",
            "range": "stddev: 0.00009477375461420773",
            "extra": "mean: 3.9695639777758314 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 252.7998170969465,
            "unit": "iter/sec",
            "range": "stddev: 0.00017955727533727458",
            "extra": "mean: 3.9556990645151804 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 94.60616777801987,
            "unit": "iter/sec",
            "range": "stddev: 0.0005251303168489804",
            "extra": "mean: 10.570135367351103 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5222.521769197077,
            "unit": "iter/sec",
            "range": "stddev: 0.00004727924745647335",
            "extra": "mean: 191.47837849103735 usec\nrounds: 3115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5785.463238564984,
            "unit": "iter/sec",
            "range": "stddev: 0.00004604778228117252",
            "extra": "mean: 172.84700615400303 usec\nrounds: 325"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 67.41743849801242,
            "unit": "iter/sec",
            "range": "stddev: 0.00007998480948078298",
            "extra": "mean: 14.83295750000175 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 354408.75789938174,
            "unit": "iter/sec",
            "range": "stddev: 1.1738028244024753e-7",
            "extra": "mean: 2.821600701763427 usec\nrounds: 1996"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.547319004293389,
            "unit": "iter/sec",
            "range": "stddev: 0.0004416011681146231",
            "extra": "mean: 73.81534307142853 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 273.38890955609634,
            "unit": "iter/sec",
            "range": "stddev: 0.00004180892359283737",
            "extra": "mean: 3.6577928549614818 msec\nrounds: 262"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 250.23318181203535,
            "unit": "iter/sec",
            "range": "stddev: 0.00019168293458032932",
            "extra": "mean: 3.9962725676851196 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 94.57898549752663,
            "unit": "iter/sec",
            "range": "stddev: 0.0005883800695238299",
            "extra": "mean: 10.57317325555529 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 160.98193847558383,
            "unit": "iter/sec",
            "range": "stddev: 0.0006114349249488451",
            "extra": "mean: 6.21187699359 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.925578188059839,
            "unit": "iter/sec",
            "range": "stddev: 0.00011917983845386217",
            "extra": "mean: 203.02185079999617 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 142.37375353287368,
            "unit": "iter/sec",
            "range": "stddev: 0.00008348845736118488",
            "extra": "mean: 7.023766496182901 msec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 161.05795669040867,
            "unit": "iter/sec",
            "range": "stddev: 0.0005997059622633115",
            "extra": "mean: 6.20894503164619 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 82.78154183017242,
            "unit": "iter/sec",
            "range": "stddev: 0.0005868197809195639",
            "extra": "mean: 12.079987614286226 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1992458.1591442928,
            "unit": "iter/sec",
            "range": "stddev: 1.9529063361451183e-8",
            "extra": "mean: 501.8925970467623 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10825.506950687126,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016279949748824604",
            "extra": "mean: 92.37442685642793 usec\nrounds: 4915"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.6575495047515,
            "unit": "iter/sec",
            "range": "stddev: 0.00006658286073805477",
            "extra": "mean: 10.453957948717138 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 101.40590155982599,
            "unit": "iter/sec",
            "range": "stddev: 0.00020611109867152948",
            "extra": "mean: 9.861358999998973 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4367.895902413104,
            "unit": "iter/sec",
            "range": "stddev: 0.000026825056964599794",
            "extra": "mean: 228.94318508083865 usec\nrounds: 1421"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.03932592146819,
            "unit": "iter/sec",
            "range": "stddev: 0.00007846340547990091",
            "extra": "mean: 14.697382527778302 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.82287387886412,
            "unit": "iter/sec",
            "range": "stddev: 0.0005085376036365498",
            "extra": "mean: 27.157032970584833 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 579889.026722348,
            "unit": "iter/sec",
            "range": "stddev: 3.965883108415812e-7",
            "extra": "mean: 1.7244678790564563 usec\nrounds: 22322"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.08607353324543,
            "unit": "iter/sec",
            "range": "stddev: 0.0005823109460079723",
            "extra": "mean: 11.352532357144744 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 239.78554953016558,
            "unit": "iter/sec",
            "range": "stddev: 0.00020445131965943192",
            "extra": "mean: 4.170393094827417 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 249.0233734692049,
            "unit": "iter/sec",
            "range": "stddev: 0.0001896826740178822",
            "extra": "mean: 4.015687307053784 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 121.65825940997277,
            "unit": "iter/sec",
            "range": "stddev: 0.014168792071937095",
            "extra": "mean: 8.219746072727608 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.2996472591136,
            "unit": "iter/sec",
            "range": "stddev: 0.000037088915398665677",
            "extra": "mean: 5.8720027674425195 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 57.55622799048652,
            "unit": "iter/sec",
            "range": "stddev: 0.00008637499932169585",
            "extra": "mean: 17.374314386364762 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.914350679842578,
            "unit": "iter/sec",
            "range": "stddev: 0.00039472053255754346",
            "extra": "mean: 37.15489969999339 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 624.6011885853218,
            "unit": "iter/sec",
            "range": "stddev: 0.000010888354757394823",
            "extra": "mean: 1.6010216091085743 msec\nrounds: 527"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 121.13025132030701,
            "unit": "iter/sec",
            "range": "stddev: 0.00021316988353492627",
            "extra": "mean: 8.255576035714489 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9745.060063745239,
            "unit": "iter/sec",
            "range": "stddev: 0.000013597234612691964",
            "extra": "mean: 102.6160940475187 usec\nrounds: 4200"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11790122.219959417,
            "unit": "iter/sec",
            "range": "stddev: 2.8992990544131515e-9",
            "extra": "mean: 84.8167628242673 nsec\nrounds: 120497"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 221.11152574858653,
            "unit": "iter/sec",
            "range": "stddev: 0.0003938949845988119",
            "extra": "mean: 4.522604584335616 msec\nrounds: 166"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.99315027180636,
            "unit": "iter/sec",
            "range": "stddev: 0.0006474489010516398",
            "extra": "mean: 10.870374555555093 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 143.622730748088,
            "unit": "iter/sec",
            "range": "stddev: 0.00971393589509664",
            "extra": "mean: 6.962686162498777 msec\nrounds: 160"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1558245.2605971508,
            "unit": "iter/sec",
            "range": "stddev: 9.555820506882101e-8",
            "extra": "mean: 641.7474997592998 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5892.7662392440025,
            "unit": "iter/sec",
            "range": "stddev: 0.00007718356269854016",
            "extra": "mean: 169.69958749429242 usec\nrounds: 2143"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8710062901788752,
            "unit": "iter/sec",
            "range": "stddev: 0.003002839695764249",
            "extra": "mean: 1.1480973344000005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 251.11409328183515,
            "unit": "iter/sec",
            "range": "stddev: 0.00019305571517034216",
            "extra": "mean: 3.982253592105884 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 101.463294167709,
            "unit": "iter/sec",
            "range": "stddev: 0.00005350186726941721",
            "extra": "mean: 9.855780932433525 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.230974958683538,
            "unit": "iter/sec",
            "range": "stddev: 0.0014728679155265984",
            "extra": "mean: 448.2345245999909 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4310702.397387062,
            "unit": "iter/sec",
            "range": "stddev: 1.0994961184224572e-8",
            "extra": "mean: 231.98075575964282 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 407.99762524455906,
            "unit": "iter/sec",
            "range": "stddev: 0.0000815582168866241",
            "extra": "mean: 2.450994658119853 msec\nrounds: 351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 329.7305610591926,
            "unit": "iter/sec",
            "range": "stddev: 0.00010733686737723113",
            "extra": "mean: 3.0327792388661297 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1589535.890590594,
            "unit": "iter/sec",
            "range": "stddev: 1.034203292663753e-7",
            "extra": "mean: 629.1144515324212 nsec\nrounds: 158731"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 144.0104947167636,
            "unit": "iter/sec",
            "range": "stddev: 0.0006623657905065551",
            "extra": "mean: 6.943938370372078 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5127.270482937994,
            "unit": "iter/sec",
            "range": "stddev: 0.000049716171307090884",
            "extra": "mean: 195.0355463648149 usec\nrounds: 2696"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5851023096772572,
            "unit": "iter/sec",
            "range": "stddev: 0.0016089006785441776",
            "extra": "mean: 630.874104399993 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 162.1535300800646,
            "unit": "iter/sec",
            "range": "stddev: 0.0006125604244754505",
            "extra": "mean: 6.166994943040969 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8705528935627712,
            "unit": "iter/sec",
            "range": "stddev: 0.001629814378876038",
            "extra": "mean: 1.1486952801999906 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 79.23988163843639,
            "unit": "iter/sec",
            "range": "stddev: 0.015072521522109162",
            "extra": "mean: 12.619907795457085 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.88572587683,
            "unit": "iter/sec",
            "range": "stddev: 0.00006447681140285098",
            "extra": "mean: 13.720107578950447 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5976.517704123757,
            "unit": "iter/sec",
            "range": "stddev: 0.0000632984106498773",
            "extra": "mean: 167.32151555579043 usec\nrounds: 2700"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1453.7373369694526,
            "unit": "iter/sec",
            "range": "stddev: 0.00001365726557370414",
            "extra": "mean: 687.8821741516659 usec\nrounds: 1091"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4286340.827669451,
            "unit": "iter/sec",
            "range": "stddev: 1.0510038089561538e-8",
            "extra": "mean: 233.2992265907566 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 253.3485706718321,
            "unit": "iter/sec",
            "range": "stddev: 0.00025307997484187033",
            "extra": "mean: 3.9471310114289997 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56073.392246452,
            "unit": "iter/sec",
            "range": "stddev: 5.928622402588454e-7",
            "extra": "mean: 17.833770348774898 usec\nrounds: 12937"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10387.828820208564,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015050426026790932",
            "extra": "mean: 96.26650740091058 usec\nrounds: 4864"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.690670098130695,
            "unit": "iter/sec",
            "range": "stddev: 0.00042688488378807965",
            "extra": "mean: 21.886306282054555 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.51922690857274,
            "unit": "iter/sec",
            "range": "stddev: 0.0006841946561992212",
            "extra": "mean: 28.969362571432708 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119586.9031019808,
            "unit": "iter/sec",
            "range": "stddev: 3.1174962861863554e-7",
            "extra": "mean: 8.362119714290321 usec\nrounds: 32895"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 512.8445313002965,
            "unit": "iter/sec",
            "range": "stddev: 0.00002286418960562404",
            "extra": "mean: 1.9499086740079703 msec\nrounds: 454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 266.85095509638353,
            "unit": "iter/sec",
            "range": "stddev: 0.0000093106640882723",
            "extra": "mean: 3.747410233696977 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15297180790857715,
            "unit": "iter/sec",
            "range": "stddev: 0.07711876785996073",
            "extra": "mean: 6.53715226139999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 88.05696325804001,
            "unit": "iter/sec",
            "range": "stddev: 0.0006033241682859556",
            "extra": "mean: 11.356285329413687 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5107.414909057557,
            "unit": "iter/sec",
            "range": "stddev: 0.00005336446672257402",
            "extra": "mean: 195.79376608440148 usec\nrounds: 2176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5088739.187699247,
            "unit": "iter/sec",
            "range": "stddev: 4.488121916811565e-9",
            "extra": "mean: 196.51233107356325 nsec\nrounds: 50762"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 19126.46581195802,
            "unit": "iter/sec",
            "range": "stddev: 0.00001809623687955675",
            "extra": "mean: 52.28357448948002 usec\nrounds: 5041"
          }
        ]
      }
    ]
  }
}