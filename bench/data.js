window.BENCHMARK_DATA = {
  "lastUpdate": 1678896517960,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jcristharif@gmail.com",
            "name": "Jim Crist-Harif",
            "username": "jcrist"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "24be96158f67850f528597195d20c00c7ff98cfb",
          "message": "docs: use teal for primary & accent colors",
          "timestamp": "2023-03-15T11:58:04-04:00",
          "tree_id": "ef96e27bf3b6f8c3449da6b644e8115a5698e000",
          "url": "https://github.com/ibis-project/ibis/commit/24be96158f67850f528597195d20c00c7ff98cfb"
        },
        "date": 1678896429906,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6951946.311481261,
            "unit": "iter/sec",
            "range": "stddev: 1.0665012325758226e-8",
            "extra": "mean: 143.84460914927567 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 115.42141454311813,
            "unit": "iter/sec",
            "range": "stddev: 0.004616085721609286",
            "extra": "mean: 8.663903522222286 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.02856429106133,
            "unit": "iter/sec",
            "range": "stddev: 0.0005597870453382691",
            "extra": "mean: 35.67788879999512 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1764.4192471912527,
            "unit": "iter/sec",
            "range": "stddev: 0.000008569298051275176",
            "extra": "mean: 566.758723354374 usec\nrounds: 1276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.3769028442028,
            "unit": "iter/sec",
            "range": "stddev: 0.000027096561295989918",
            "extra": "mean: 5.144644169999566 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.826338092015625,
            "unit": "iter/sec",
            "range": "stddev: 0.000676588381679266",
            "extra": "mean: 26.436606090904682 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11661.546705230146,
            "unit": "iter/sec",
            "range": "stddev: 0.000011177940795304821",
            "extra": "mean: 85.75191827268547 usec\nrounds: 4099"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.03716186265946,
            "unit": "iter/sec",
            "range": "stddev: 0.0005297131819475719",
            "extra": "mean: 9.897348476190444 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.44889611530144,
            "unit": "iter/sec",
            "range": "stddev: 0.01802759128417664",
            "extra": "mean: 30.81768934285703 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.96505336916796,
            "unit": "iter/sec",
            "range": "stddev: 0.0005794688586377886",
            "extra": "mean: 8.774619678900088 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8663281780859131,
            "unit": "iter/sec",
            "range": "stddev: 0.0008997536897950964",
            "extra": "mean: 1.1542969803999967 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 121.33532875047004,
            "unit": "iter/sec",
            "range": "stddev: 0.0006086554877166502",
            "extra": "mean: 8.241622702127687 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.639208285948932,
            "unit": "iter/sec",
            "range": "stddev: 0.0011281935101383153",
            "extra": "mean: 378.90150820000486 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.502326292163245,
            "unit": "iter/sec",
            "range": "stddev: 0.0003069964945999124",
            "extra": "mean: 64.50644768750102 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 298.33751673879823,
            "unit": "iter/sec",
            "range": "stddev: 0.00019150809940463246",
            "extra": "mean: 3.3519083048328926 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.13263553598141,
            "unit": "iter/sec",
            "range": "stddev: 0.0005666072206778078",
            "extra": "mean: 9.511794267325794 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6687644154978587,
            "unit": "iter/sec",
            "range": "stddev: 0.054596814769470786",
            "extra": "mean: 1.4952948703999964 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 110.08682577307258,
            "unit": "iter/sec",
            "range": "stddev: 0.00013216956023636816",
            "extra": "mean: 9.083739066664975 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 236.81008189280578,
            "unit": "iter/sec",
            "range": "stddev: 0.004260644986261178",
            "extra": "mean: 4.222793185184822 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 359.65630905774185,
            "unit": "iter/sec",
            "range": "stddev: 0.00003871730741197068",
            "extra": "mean: 2.7804322482758193 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 282.10697673248717,
            "unit": "iter/sec",
            "range": "stddev: 0.00024012376322100692",
            "extra": "mean: 3.544754587718925 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.48088467656608,
            "unit": "iter/sec",
            "range": "stddev: 0.00007362957293012779",
            "extra": "mean: 8.44018005714458 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.39132077401939,
            "unit": "iter/sec",
            "range": "stddev: 0.00023164967868522448",
            "extra": "mean: 96.23415749999964 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 750.4839604536112,
            "unit": "iter/sec",
            "range": "stddev: 0.000032747547928725324",
            "extra": "mean: 1.3324735140183077 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5452.218799026066,
            "unit": "iter/sec",
            "range": "stddev: 0.00004244598786110702",
            "extra": "mean: 183.41156818186215 usec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8021725505838009,
            "unit": "iter/sec",
            "range": "stddev: 0.000860201944339265",
            "extra": "mean: 554.8858235999973 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 301.49747584943213,
            "unit": "iter/sec",
            "range": "stddev: 0.00021017408769784273",
            "extra": "mean: 3.3167773533845444 msec\nrounds: 133"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12467182.86919561,
            "unit": "iter/sec",
            "range": "stddev: 3.544549354226306e-9",
            "extra": "mean: 80.21058249418049 nsec\nrounds: 100001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.1361020559422,
            "unit": "iter/sec",
            "range": "stddev: 0.00015958603709448796",
            "extra": "mean: 6.244688032000795 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69447.33503643636,
            "unit": "iter/sec",
            "range": "stddev: 5.026401212457802e-7",
            "extra": "mean: 14.399400631792975 usec\nrounds: 13928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 692.4144602704266,
            "unit": "iter/sec",
            "range": "stddev: 0.000015400800378375638",
            "extra": "mean: 1.4442217160072655 msec\nrounds: 581"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 754046.0061502566,
            "unit": "iter/sec",
            "range": "stddev: 1.8491176597736448e-7",
            "extra": "mean: 1.3261790286582764 usec\nrounds: 24214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5656.511737831221,
            "unit": "iter/sec",
            "range": "stddev: 0.000042330458208843294",
            "extra": "mean: 176.7873994341631 usec\nrounds: 2476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.97082803258296,
            "unit": "iter/sec",
            "range": "stddev: 0.0005666690660028288",
            "extra": "mean: 9.348343079997505 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 279.2503124224273,
            "unit": "iter/sec",
            "range": "stddev: 0.005845989648674259",
            "extra": "mean: 3.5810165844587516 msec\nrounds: 296"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 101.81581984076115,
            "unit": "iter/sec",
            "range": "stddev: 0.0006020639232652883",
            "extra": "mean: 9.821656414140644 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8040.632248363259,
            "unit": "iter/sec",
            "range": "stddev: 0.000021340575580372917",
            "extra": "mean: 124.3683293939427 usec\nrounds: 4569"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.23931852405128,
            "unit": "iter/sec",
            "range": "stddev: 0.000569704178505204",
            "extra": "mean: 9.41271098019715 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 120.63695309336889,
            "unit": "iter/sec",
            "range": "stddev: 0.0006014065217523246",
            "extra": "mean: 8.289334025421166 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.4042457475246,
            "unit": "iter/sec",
            "range": "stddev: 0.00003809044164623284",
            "extra": "mean: 6.561496991734839 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5408.171537363266,
            "unit": "iter/sec",
            "range": "stddev: 0.000046686166984087554",
            "extra": "mean: 184.90537755530337 usec\nrounds: 2201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 74.03775408033447,
            "unit": "iter/sec",
            "range": "stddev: 0.00006726542003083142",
            "extra": "mean: 13.506622566035063 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.17900815575997417,
            "unit": "iter/sec",
            "range": "stddev: 0.06964464650447674",
            "extra": "mean: 5.586337649000001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.562267285976965,
            "unit": "iter/sec",
            "range": "stddev: 0.00026222099130976623",
            "extra": "mean: 179.78280233333996 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.280925036601104,
            "unit": "iter/sec",
            "range": "stddev: 0.00018783929662703226",
            "extra": "mean: 20.291826893616477 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9245967280667553,
            "unit": "iter/sec",
            "range": "stddev: 0.00432342225189494",
            "extra": "mean: 1.0815526052000053 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.59845270362809,
            "unit": "iter/sec",
            "range": "stddev: 0.00014820812192592402",
            "extra": "mean: 16.778959094337768 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 108.88297607199246,
            "unit": "iter/sec",
            "range": "stddev: 0.009776629609133667",
            "extra": "mean: 9.184172182608316 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.57638714233072,
            "unit": "iter/sec",
            "range": "stddev: 0.0005623222637403302",
            "extra": "mean: 8.225281434208847 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2514483.643751214,
            "unit": "iter/sec",
            "range": "stddev: 1.5679766518957513e-8",
            "extra": "mean: 397.6959653268956 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 167.1029176080953,
            "unit": "iter/sec",
            "range": "stddev: 0.003967120444697561",
            "extra": "mean: 5.984335966803939 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6489188.583265113,
            "unit": "iter/sec",
            "range": "stddev: 7.837362770644567e-9",
            "extra": "mean: 154.1024716991206 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 485263.12317516166,
            "unit": "iter/sec",
            "range": "stddev: 1.7223130445156043e-7",
            "extra": "mean: 2.0607376745564854 usec\nrounds: 2150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.82955673592643,
            "unit": "iter/sec",
            "range": "stddev: 0.00007448416978623378",
            "extra": "mean: 9.022863841120467 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.66117711394469,
            "unit": "iter/sec",
            "range": "stddev: 0.0005745417515233157",
            "extra": "mean: 9.375482505051613 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11820.832714131895,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014707527071462451",
            "extra": "mean: 84.59640908414958 usec\nrounds: 6803"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.94001064738926,
            "unit": "iter/sec",
            "range": "stddev: 0.00008208757131472727",
            "extra": "mean: 13.709896545453727 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5810485.520288399,
            "unit": "iter/sec",
            "range": "stddev: 8.04819528735157e-9",
            "extra": "mean: 172.10265760222657 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 317.2861518597547,
            "unit": "iter/sec",
            "range": "stddev: 0.0001501100356473469",
            "extra": "mean: 3.1517291067969944 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1888835.2984484243,
            "unit": "iter/sec",
            "range": "stddev: 8.29096041523334e-8",
            "extra": "mean: 529.4267852900915 nsec\nrounds: 140846"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1660062.0446295107,
            "unit": "iter/sec",
            "range": "stddev: 7.480111655830778e-8",
            "extra": "mean: 602.3871235627088 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5259.481242642592,
            "unit": "iter/sec",
            "range": "stddev: 0.00006470292302119709",
            "extra": "mean: 190.1328199238061 usec\nrounds: 1566"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 120.75589316529296,
            "unit": "iter/sec",
            "range": "stddev: 0.000582904613213124",
            "extra": "mean: 8.281169339132633 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 542.135378488013,
            "unit": "iter/sec",
            "range": "stddev: 0.00010586175956079956",
            "extra": "mean: 1.8445577242882532 msec\nrounds: 457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5592.895480232277,
            "unit": "iter/sec",
            "range": "stddev: 0.00004201560133349221",
            "extra": "mean: 178.79826353530734 usec\nrounds: 2512"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 310.3053953516876,
            "unit": "iter/sec",
            "range": "stddev: 0.0002709539503007499",
            "extra": "mean: 3.2226316879429073 msec\nrounds: 282"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.48322147291613,
            "unit": "iter/sec",
            "range": "stddev: 0.0005476972818403554",
            "extra": "mean: 10.697106756100816 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 161.65439873347185,
            "unit": "iter/sec",
            "range": "stddev: 0.00016388170269500738",
            "extra": "mean: 6.186036432257886 msec\nrounds: 155"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5233.414923894801,
            "unit": "iter/sec",
            "range": "stddev: 0.00004893660808788335",
            "extra": "mean: 191.07982350762703 usec\nrounds: 2697"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 289.5217491827674,
            "unit": "iter/sec",
            "range": "stddev: 0.000039749012159417524",
            "extra": "mean: 3.4539719479545092 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.28392484608693,
            "unit": "iter/sec",
            "range": "stddev: 0.00007369120537590007",
            "extra": "mean: 10.072123977272568 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5739.712166591259,
            "unit": "iter/sec",
            "range": "stddev: 0.00004718170198160202",
            "extra": "mean: 174.2247644090291 usec\nrounds: 2377"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 305.00355973350344,
            "unit": "iter/sec",
            "range": "stddev: 0.00019091111296008908",
            "extra": "mean: 3.278650258619109 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5771.571776795041,
            "unit": "iter/sec",
            "range": "stddev: 0.000048695723025809424",
            "extra": "mean: 173.26302758991258 usec\nrounds: 3697"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1897052.85278355,
            "unit": "iter/sec",
            "range": "stddev: 8.597669008656792e-8",
            "extra": "mean: 527.1334420296713 nsec\nrounds: 161291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 135.9065943667237,
            "unit": "iter/sec",
            "range": "stddev: 0.00018628968646382916",
            "extra": "mean: 7.357994692307932 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 48.276690073071876,
            "unit": "iter/sec",
            "range": "stddev: 0.000253586696701394",
            "extra": "mean: 20.71393043902542 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 309.9668579366619,
            "unit": "iter/sec",
            "range": "stddev: 0.00020909679211466006",
            "extra": "mean: 3.2261513590731634 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 311.3256528085029,
            "unit": "iter/sec",
            "range": "stddev: 0.00020477830673661004",
            "extra": "mean: 3.212070675766324 msec\nrounds: 293"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1152.769028358447,
            "unit": "iter/sec",
            "range": "stddev: 0.000018172535181536266",
            "extra": "mean: 867.476463541017 usec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.48347738600883,
            "unit": "iter/sec",
            "range": "stddev: 0.0005687302188574001",
            "extra": "mean: 8.734884918181312 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9229941689533154,
            "unit": "iter/sec",
            "range": "stddev: 0.0031807386824690333",
            "extra": "mean: 1.0834304632000111 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5745.4317972311665,
            "unit": "iter/sec",
            "range": "stddev: 0.000062556077191265",
            "extra": "mean: 174.0513220402197 usec\nrounds: 2627"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 101.40088254523191,
            "unit": "iter/sec",
            "range": "stddev: 0.0006489525779767502",
            "extra": "mean: 9.861847105264888 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.61273584491248,
            "unit": "iter/sec",
            "range": "stddev: 0.0003624268635178899",
            "extra": "mean: 14.574553655174622 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.18072050120752,
            "unit": "iter/sec",
            "range": "stddev: 0.0002642766998734758",
            "extra": "mean: 10.506329377778911 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140513.0105160208,
            "unit": "iter/sec",
            "range": "stddev: 3.2808786946932663e-7",
            "extra": "mean: 7.116778697770365 usec\nrounds: 41667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13498.68021666225,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017204876435358983",
            "extra": "mean: 74.08131639163054 usec\nrounds: 5942"
          }
        ]
      }
    ]
  }
}