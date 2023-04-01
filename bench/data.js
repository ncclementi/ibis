window.BENCHMARK_DATA = {
  "lastUpdate": 1680309250639,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "4622479da9aa46e733364061935a24a417043403",
          "message": "chore(flake/nixpkgs): `49079a13` -> `3364b5b1`",
          "timestamp": "2023-04-01T00:27:00Z",
          "tree_id": "80adefdce3f5f1c618fbdd7dc13e24bb21c987a1",
          "url": "https://github.com/ibis-project/ibis/commit/4622479da9aa46e733364061935a24a417043403"
        },
        "date": 1680309161010,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4161.9652174891135,
            "unit": "iter/sec",
            "range": "stddev: 0.0001381238671728713",
            "extra": "mean: 240.27110937829832 usec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 81.4828602922465,
            "unit": "iter/sec",
            "range": "stddev: 0.0009411903451026105",
            "extra": "mean: 12.272519599991938 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11198.71964619308,
            "unit": "iter/sec",
            "range": "stddev: 0.000021015221715809023",
            "extra": "mean: 89.295922354833 usec\nrounds: 3516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4668.62304206884,
            "unit": "iter/sec",
            "range": "stddev: 0.00005885122814689737",
            "extra": "mean: 214.19591836587065 usec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 104.86294288676886,
            "unit": "iter/sec",
            "range": "stddev: 0.0009078625224921816",
            "extra": "mean: 9.536257256100482 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.19352134122923,
            "unit": "iter/sec",
            "range": "stddev: 0.0011574076867297146",
            "extra": "mean: 45.05819444444291 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 275.5957227600902,
            "unit": "iter/sec",
            "range": "stddev: 0.0002763141996447821",
            "extra": "mean: 3.62850333809612 msec\nrounds: 210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2375534.0293036513,
            "unit": "iter/sec",
            "range": "stddev: 8.193078753484231e-8",
            "extra": "mean: 420.9579773070912 nsec\nrounds: 99921"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.309992453180659,
            "unit": "iter/sec",
            "range": "stddev: 0.005694499968366653",
            "extra": "mean: 432.90184720001434 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 96.36949550980448,
            "unit": "iter/sec",
            "range": "stddev: 0.0008666725897586373",
            "extra": "mean: 10.3767275600012 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 109.34821461592722,
            "unit": "iter/sec",
            "range": "stddev: 0.0008701433886623435",
            "extra": "mean: 9.14509673077318 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 103.456587090756,
            "unit": "iter/sec",
            "range": "stddev: 0.0005855711173210844",
            "extra": "mean: 9.66589009091091 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.023457519380834,
            "unit": "iter/sec",
            "range": "stddev: 0.0009386761358706691",
            "extra": "mean: 23.243134272728515 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.151002989682794,
            "unit": "iter/sec",
            "range": "stddev: 0.10471417415079046",
            "extra": "mean: 6.622385438200001 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 487.18000370277235,
            "unit": "iter/sec",
            "range": "stddev: 0.00018004294944829873",
            "extra": "mean: 2.0526294026839786 msec\nrounds: 149"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 155465.4618748335,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014926556295907316",
            "extra": "mean: 6.432296845489116 usec\nrounds: 29069"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 106.06035922921536,
            "unit": "iter/sec",
            "range": "stddev: 0.0009240281145724413",
            "extra": "mean: 9.428593371429391 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6282688526046629,
            "unit": "iter/sec",
            "range": "stddev: 0.046353826150657765",
            "extra": "mean: 1.5916752770000016 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 291.43212573450097,
            "unit": "iter/sec",
            "range": "stddev: 0.00030840464314282683",
            "extra": "mean: 3.4313307000032487 msec\nrounds: 150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 4974.7447529159035,
            "unit": "iter/sec",
            "range": "stddev: 0.00006288835539857422",
            "extra": "mean: 201.01533840783662 usec\nrounds: 2890"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5637338.412630291,
            "unit": "iter/sec",
            "range": "stddev: 4.871181931297749e-8",
            "extra": "mean: 177.38867650006134 nsec\nrounds: 181819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 631.0318675436819,
            "unit": "iter/sec",
            "range": "stddev: 0.00021173921409073712",
            "extra": "mean: 1.5847060210961168 msec\nrounds: 474"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 279.61494633928515,
            "unit": "iter/sec",
            "range": "stddev: 0.0003349629291622238",
            "extra": "mean: 3.5763467335776773 msec\nrounds: 274"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 657.3305799788611,
            "unit": "iter/sec",
            "range": "stddev: 0.00029208323817691737",
            "extra": "mean: 1.5213045466896715 msec\nrounds: 589"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 141.03584126205027,
            "unit": "iter/sec",
            "range": "stddev: 0.0007760343882363401",
            "extra": "mean: 7.090396249999742 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 297.5546880436646,
            "unit": "iter/sec",
            "range": "stddev: 0.00034590435425898257",
            "extra": "mean: 3.360726751020825 msec\nrounds: 245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 68836.42047953964,
            "unit": "iter/sec",
            "range": "stddev: 0.000002625297135349825",
            "extra": "mean: 14.527193497768115 usec\nrounds: 12150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 277.93285112350407,
            "unit": "iter/sec",
            "range": "stddev: 0.00031501781348869834",
            "extra": "mean: 3.5979913707848574 msec\nrounds: 178"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10488574.793724148,
            "unit": "iter/sec",
            "range": "stddev: 1.8836719916593336e-8",
            "extra": "mean: 95.34183811117065 nsec\nrounds: 98030"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 70.12683630503196,
            "unit": "iter/sec",
            "range": "stddev: 0.00038134773828486535",
            "extra": "mean: 14.259876142854669 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1882132.5431800017,
            "unit": "iter/sec",
            "range": "stddev: 3.939676166347773e-7",
            "extra": "mean: 531.3122094528084 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 91.97606442860511,
            "unit": "iter/sec",
            "range": "stddev: 0.000586209716930061",
            "extra": "mean: 10.872393879999436 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 150.70635482417256,
            "unit": "iter/sec",
            "range": "stddev: 0.013224618754511358",
            "extra": "mean: 6.635420259263048 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.165118423997119,
            "unit": "iter/sec",
            "range": "stddev: 0.003302138742848796",
            "extra": "mean: 193.60640316667363 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.94392647043967,
            "unit": "iter/sec",
            "range": "stddev: 0.0037700558958750287",
            "extra": "mean: 71.71581133333878 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 261.83018857760146,
            "unit": "iter/sec",
            "range": "stddev: 0.0004980832849468508",
            "extra": "mean: 3.8192692959987653 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 92.38691224367233,
            "unit": "iter/sec",
            "range": "stddev: 0.0012307359086598504",
            "extra": "mean: 10.824043965908071 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 31.62073706825284,
            "unit": "iter/sec",
            "range": "stddev: 0.03271865905423916",
            "extra": "mean: 31.624816266664386 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.86094607686599,
            "unit": "iter/sec",
            "range": "stddev: 0.0006161280883406472",
            "extra": "mean: 7.049156428564629 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.12460225617924,
            "unit": "iter/sec",
            "range": "stddev: 0.004104266713722525",
            "extra": "mean: 109.5938181111175 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 106.81268726683837,
            "unit": "iter/sec",
            "range": "stddev: 0.0013055275666926896",
            "extra": "mean: 9.362183702969762 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 98.78128823101565,
            "unit": "iter/sec",
            "range": "stddev: 0.001434946617065405",
            "extra": "mean: 10.123374759613805 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13142.549121508931,
            "unit": "iter/sec",
            "range": "stddev: 0.000021171948839676074",
            "extra": "mean: 76.08873976840708 usec\nrounds: 6402"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 85.39295596222506,
            "unit": "iter/sec",
            "range": "stddev: 0.0015896359457818643",
            "extra": "mean: 11.710567794870176 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 94.38240587496264,
            "unit": "iter/sec",
            "range": "stddev: 0.0009971298868898515",
            "extra": "mean: 10.59519505494271 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6565706.887460079,
            "unit": "iter/sec",
            "range": "stddev: 2.5610159012301668e-8",
            "extra": "mean: 152.30652496990288 nsec\nrounds: 54342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.06762089240633,
            "unit": "iter/sec",
            "range": "stddev: 0.0373289179749208",
            "extra": "mean: 31.184103222225684 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 98.23465610281832,
            "unit": "iter/sec",
            "range": "stddev: 0.0009071035656602056",
            "extra": "mean: 10.179706833333235 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 128.68470680691763,
            "unit": "iter/sec",
            "range": "stddev: 0.0006378146995751909",
            "extra": "mean: 7.770931175997703 msec\nrounds: 125"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 283.86740858159294,
            "unit": "iter/sec",
            "range": "stddev: 0.00032610047532506903",
            "extra": "mean: 3.5227714410637128 msec\nrounds: 263"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1814492.749432355,
            "unit": "iter/sec",
            "range": "stddev: 3.41510270584725e-7",
            "extra": "mean: 551.1182121355071 nsec\nrounds: 169492"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 321.9832991557321,
            "unit": "iter/sec",
            "range": "stddev: 0.0002035148442373495",
            "extra": "mean: 3.105751144926107 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1065.7599034399511,
            "unit": "iter/sec",
            "range": "stddev: 0.00006484649357419605",
            "extra": "mean: 938.2976379316785 usec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5112342.042269573,
            "unit": "iter/sec",
            "range": "stddev: 4.744863433818805e-8",
            "extra": "mean: 195.60506549302042 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7691.512697995664,
            "unit": "iter/sec",
            "range": "stddev: 0.000016729785499130352",
            "extra": "mean: 130.01343679255584 usec\nrounds: 3354"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 90.3808967320694,
            "unit": "iter/sec",
            "range": "stddev: 0.0005740489062973662",
            "extra": "mean: 11.064285000009022 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 707156.3329202316,
            "unit": "iter/sec",
            "range": "stddev: 5.366511434544905e-7",
            "extra": "mean: 1.4141144658500875 usec\nrounds: 22522"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 149.71360487134123,
            "unit": "iter/sec",
            "range": "stddev: 0.0004181402752263576",
            "extra": "mean: 6.679419688406847 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7509274912324786,
            "unit": "iter/sec",
            "range": "stddev: 0.013926579777919782",
            "extra": "mean: 1.3316864965999913 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8009041102798143,
            "unit": "iter/sec",
            "range": "stddev: 0.009249337371989233",
            "extra": "mean: 1.2485889223999949 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 85.10198002471486,
            "unit": "iter/sec",
            "range": "stddev: 0.0008341936221899447",
            "extra": "mean: 11.750607914288073 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.786850981714594,
            "unit": "iter/sec",
            "range": "stddev: 0.01927412547724231",
            "extra": "mean: 1.2708886729999904 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5025.376068488342,
            "unit": "iter/sec",
            "range": "stddev: 0.00006694603406776495",
            "extra": "mean: 198.9900828060426 usec\nrounds: 2210"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1608295.3894954566,
            "unit": "iter/sec",
            "range": "stddev: 3.376262821521922e-7",
            "extra": "mean: 621.7763269928375 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.50496789861748,
            "unit": "iter/sec",
            "range": "stddev: 0.0008369537553249986",
            "extra": "mean: 10.470659506022157 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 149.1196337847791,
            "unit": "iter/sec",
            "range": "stddev: 0.0040803319415228965",
            "extra": "mean: 6.706025052631746 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4800.044910140996,
            "unit": "iter/sec",
            "range": "stddev: 0.0003841052875535196",
            "extra": "mean: 208.33138412670104 usec\nrounds: 2205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 109.66016871509281,
            "unit": "iter/sec",
            "range": "stddev: 0.00045643019925056935",
            "extra": "mean: 9.119081355766394 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5000.586709311607,
            "unit": "iter/sec",
            "range": "stddev: 0.00002932522542969901",
            "extra": "mean: 199.97653438103515 usec\nrounds: 2036"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5298.82559674173,
            "unit": "iter/sec",
            "range": "stddev: 0.000057635582533889134",
            "extra": "mean: 188.7210631380101 usec\nrounds: 1568"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.56420244575501,
            "unit": "iter/sec",
            "range": "stddev: 0.001140781764625444",
            "extra": "mean: 26.62108962499765 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.26171059839598,
            "unit": "iter/sec",
            "range": "stddev: 0.0008919884220956596",
            "extra": "mean: 19.507737614032937 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 291.7667753168697,
            "unit": "iter/sec",
            "range": "stddev: 0.00032216068240794026",
            "extra": "mean: 3.427395044942873 msec\nrounds: 267"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12086.412555415092,
            "unit": "iter/sec",
            "range": "stddev: 0.000010088971406492496",
            "extra": "mean: 82.7375365034986 usec\nrounds: 5342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 206.7001601687994,
            "unit": "iter/sec",
            "range": "stddev: 0.004373526860467163",
            "extra": "mean: 4.8379256173936245 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5759521274106596,
            "unit": "iter/sec",
            "range": "stddev: 0.003968970168507235",
            "extra": "mean: 634.5370411999966 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 112.27716457430758,
            "unit": "iter/sec",
            "range": "stddev: 0.0008110598972675013",
            "extra": "mean: 8.906530582522658 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 88.13579691253906,
            "unit": "iter/sec",
            "range": "stddev: 0.021707268138440445",
            "extra": "mean: 11.346127623856885 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 98.58599422959675,
            "unit": "iter/sec",
            "range": "stddev: 0.0009386192374666717",
            "extra": "mean: 10.143428666663358 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4647.658712556275,
            "unit": "iter/sec",
            "range": "stddev: 0.00005814605721686258",
            "extra": "mean: 215.16209813305903 usec\nrounds: 2089"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 110.30428015880749,
            "unit": "iter/sec",
            "range": "stddev: 0.000954321070771791",
            "extra": "mean: 9.065831340001296 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1677.2117417016107,
            "unit": "iter/sec",
            "range": "stddev: 0.00006179795881843623",
            "extra": "mean: 596.2276408734491 usec\nrounds: 1189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 51.69883912276868,
            "unit": "iter/sec",
            "range": "stddev: 0.001032517716912731",
            "extra": "mean: 19.342794093022295 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 278.33805842592886,
            "unit": "iter/sec",
            "range": "stddev: 0.0002756025048707024",
            "extra": "mean: 3.5927533793087782 msec\nrounds: 232"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 447721.45069422934,
            "unit": "iter/sec",
            "range": "stddev: 6.928424401391295e-7",
            "extra": "mean: 2.2335315818561225 usec\nrounds: 1789"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 57.637928588704185,
            "unit": "iter/sec",
            "range": "stddev: 0.0008210320986240041",
            "extra": "mean: 17.349686647066267 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 257.40712801523574,
            "unit": "iter/sec",
            "range": "stddev: 0.0002741110258660726",
            "extra": "mean: 3.8848963030301578 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5016.692396616662,
            "unit": "iter/sec",
            "range": "stddev: 0.000058328518227502694",
            "extra": "mean: 199.33452580716647 usec\nrounds: 2170"
          }
        ]
      }
    ]
  }
}