window.BENCHMARK_DATA = {
  "lastUpdate": 1677844947432,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "krzysztofwitt93@wp.pl",
            "name": "Krzysztof",
            "username": "krzysztof-kwitt"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "090ff03c7731a79a919750a71d97b5b127142bfd",
          "message": "feat(druid): implement ops.Pi, ops.Modulus, ops.Power, ops.Log10",
          "timestamp": "2023-03-03T06:57:22-05:00",
          "tree_id": "3c25d098c6b7438e66d3c9c68cf1ef70f69db347",
          "url": "https://github.com/ibis-project/ibis/commit/090ff03c7731a79a919750a71d97b5b127142bfd"
        },
        "date": 1677844869956,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 686.0309619841245,
            "unit": "iter/sec",
            "range": "stddev: 0.00007324567926460953",
            "extra": "mean: 1.457660157360567 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6998094933949249,
            "unit": "iter/sec",
            "range": "stddev: 0.0019394907614039717",
            "extra": "mean: 1.428960323399997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5302893332564618,
            "unit": "iter/sec",
            "range": "stddev: 0.0014992728293018482",
            "extra": "mean: 395.2117202000011 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.703571620180949,
            "unit": "iter/sec",
            "range": "stddev: 0.00031686296244722126",
            "extra": "mean: 175.32873549999786 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.27782815240462,
            "unit": "iter/sec",
            "range": "stddev: 0.00014916828201771103",
            "extra": "mean: 15.55746403921692 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 195.4042814517993,
            "unit": "iter/sec",
            "range": "stddev: 0.00010199031667261056",
            "extra": "mean: 5.117595134406876 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.23768949330375,
            "unit": "iter/sec",
            "range": "stddev: 0.0009339379535086792",
            "extra": "mean: 16.067434510202883 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 142.60994025550232,
            "unit": "iter/sec",
            "range": "stddev: 0.0005393574629349567",
            "extra": "mean: 7.012133924243875 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 93.91662570343634,
            "unit": "iter/sec",
            "range": "stddev: 0.0002485878890206791",
            "extra": "mean: 10.647741999991922 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 99.19341511424514,
            "unit": "iter/sec",
            "range": "stddev: 0.008641968477340858",
            "extra": "mean: 10.081314357896225 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1819270.412458755,
            "unit": "iter/sec",
            "range": "stddev: 1.0200743152537134e-7",
            "extra": "mean: 549.670897273866 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 310.3685521394818,
            "unit": "iter/sec",
            "range": "stddev: 0.00025598751783870925",
            "extra": "mean: 3.221975915751262 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 104.25023122349093,
            "unit": "iter/sec",
            "range": "stddev: 0.0004565927276762968",
            "extra": "mean: 9.592304863633412 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.77184442455678,
            "unit": "iter/sec",
            "range": "stddev: 0.0000653586108197365",
            "extra": "mean: 6.181545395350646 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8149.5332237627545,
            "unit": "iter/sec",
            "range": "stddev: 0.00001537019318049665",
            "extra": "mean: 122.70641428691371 usec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 142.29269858957016,
            "unit": "iter/sec",
            "range": "stddev: 0.0005906989088621504",
            "extra": "mean: 7.02776748148129 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 139.7264638486159,
            "unit": "iter/sec",
            "range": "stddev: 0.0006720753582762093",
            "extra": "mean: 7.156840389830746 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 337.2514454430439,
            "unit": "iter/sec",
            "range": "stddev: 0.000010924629043105818",
            "extra": "mean: 2.96514666878984 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13809.392449586105,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014913816702965736",
            "extra": "mean: 72.41448192965015 usec\nrounds: 7028"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5182.182380282411,
            "unit": "iter/sec",
            "range": "stddev: 0.000023431467640156613",
            "extra": "mean: 192.96889353120443 usec\nrounds: 1484"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 198.52400611621505,
            "unit": "iter/sec",
            "range": "stddev: 0.00007028712040198692",
            "extra": "mean: 5.037174191491 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5673.896823844633,
            "unit": "iter/sec",
            "range": "stddev: 0.00004699068716968962",
            "extra": "mean: 176.24571454974043 usec\nrounds: 2165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1174.02524949841,
            "unit": "iter/sec",
            "range": "stddev: 0.000013989693785238086",
            "extra": "mean: 851.7704371581782 usec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 316.61650267637594,
            "unit": "iter/sec",
            "range": "stddev: 0.0002115809049694704",
            "extra": "mean: 3.158395066419304 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 292.90427315985585,
            "unit": "iter/sec",
            "range": "stddev: 0.00003293848128154312",
            "extra": "mean: 3.414084708331444 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2709832.696454159,
            "unit": "iter/sec",
            "range": "stddev: 1.54307693191498e-8",
            "extra": "mean: 369.0264721169442 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.772610074549515,
            "unit": "iter/sec",
            "range": "stddev: 0.0013328666979877612",
            "extra": "mean: 564.1398604000017 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5733.5711106847275,
            "unit": "iter/sec",
            "range": "stddev: 0.0000491583100226261",
            "extra": "mean: 174.41137132431516 usec\nrounds: 2483"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5385.066069014771,
            "unit": "iter/sec",
            "range": "stddev: 0.00006386539389994569",
            "extra": "mean: 185.69874300222946 usec\nrounds: 393"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 131.33062167979134,
            "unit": "iter/sec",
            "range": "stddev: 0.0006606216099502663",
            "extra": "mean: 7.614370412699236 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 93.27957632985758,
            "unit": "iter/sec",
            "range": "stddev: 0.0007396326905206029",
            "extra": "mean: 10.720460355263352 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12614.553053486237,
            "unit": "iter/sec",
            "range": "stddev: 0.000003411069931965659",
            "extra": "mean: 79.2735181151451 usec\nrounds: 5051"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5734.052986158424,
            "unit": "iter/sec",
            "range": "stddev: 0.000047493462992516194",
            "extra": "mean: 174.39671422882307 usec\nrounds: 2509"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5137.367770520897,
            "unit": "iter/sec",
            "range": "stddev: 0.00005036236525559851",
            "extra": "mean: 194.65221192420225 usec\nrounds: 3388"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5531862.839123096,
            "unit": "iter/sec",
            "range": "stddev: 9.135702402914742e-9",
            "extra": "mean: 180.77093179658007 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 40.675541058101736,
            "unit": "iter/sec",
            "range": "stddev: 0.0010165590033392102",
            "extra": "mean: 24.58479897222708 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 133.62373598771205,
            "unit": "iter/sec",
            "range": "stddev: 0.0006415550302721823",
            "extra": "mean: 7.4837003516497935 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1754.255016278266,
            "unit": "iter/sec",
            "range": "stddev: 0.000009687640640749023",
            "extra": "mean: 570.0425483870337 usec\nrounds: 1395"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 91.41276922370537,
            "unit": "iter/sec",
            "range": "stddev: 0.013787025856114698",
            "extra": "mean: 10.939390727271368 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 140.3275420084078,
            "unit": "iter/sec",
            "range": "stddev: 0.0006621100556287227",
            "extra": "mean: 7.126184822221746 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5165.636934962414,
            "unit": "iter/sec",
            "range": "stddev: 0.000053956692284416434",
            "extra": "mean: 193.58696954323915 usec\nrounds: 2955"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 784571.0386592838,
            "unit": "iter/sec",
            "range": "stddev: 1.542125684841878e-7",
            "extra": "mean: 1.274581842466238 usec\nrounds: 23924"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 527.1896046300309,
            "unit": "iter/sec",
            "range": "stddev: 0.00005979711726473219",
            "extra": "mean: 1.896850755814459 msec\nrounds: 344"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 73299.99948238576,
            "unit": "iter/sec",
            "range": "stddev: 5.16133798146998e-7",
            "extra": "mean: 13.642564898520956 usec\nrounds: 14045"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 284.01233693792835,
            "unit": "iter/sec",
            "range": "stddev: 0.0002884448984886782",
            "extra": "mean: 3.520973809734725 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 227.82999258724965,
            "unit": "iter/sec",
            "range": "stddev: 0.003788846352030513",
            "extra": "mean: 4.389237732240369 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.15270328136914,
            "unit": "iter/sec",
            "range": "stddev: 0.0007174437375442957",
            "extra": "mean: 9.332475704081206 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 25.09841437471838,
            "unit": "iter/sec",
            "range": "stddev: 0.0008128610747929851",
            "extra": "mean: 39.843154434779734 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 136.90944653555314,
            "unit": "iter/sec",
            "range": "stddev: 0.00004071687122832485",
            "extra": "mean: 7.304097893203566 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.40867022111051,
            "unit": "iter/sec",
            "range": "stddev: 0.00008347099935491692",
            "extra": "mean: 8.374601259257705 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 307.1926267530523,
            "unit": "iter/sec",
            "range": "stddev: 0.00023007051341988397",
            "extra": "mean: 3.255286464944634 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8989435771138342,
            "unit": "iter/sec",
            "range": "stddev: 0.0023226078907029805",
            "extra": "mean: 1.1124168696000027 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 295.73728821764666,
            "unit": "iter/sec",
            "range": "stddev: 0.00025193111828627406",
            "extra": "mean: 3.381379487269979 msec\nrounds: 275"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8965636562872147,
            "unit": "iter/sec",
            "range": "stddev: 0.004467952792686287",
            "extra": "mean: 1.1153697710000074 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 161.9379496609726,
            "unit": "iter/sec",
            "range": "stddev: 0.000049465560428327966",
            "extra": "mean: 6.175204774999088 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 304.21184020195005,
            "unit": "iter/sec",
            "range": "stddev: 0.00021324019332981747",
            "extra": "mean: 3.2871830344806874 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11777242.333773507,
            "unit": "iter/sec",
            "range": "stddev: 3.491268853182825e-9",
            "extra": "mean: 84.90952055320747 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 133.87866479258497,
            "unit": "iter/sec",
            "range": "stddev: 0.00021618509076512337",
            "extra": "mean: 7.46945005426575 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7078472.842524381,
            "unit": "iter/sec",
            "range": "stddev: 4.876716063114341e-9",
            "extra": "mean: 141.2734105572196 nsec\nrounds: 59524"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.33455272133241,
            "unit": "iter/sec",
            "range": "stddev: 0.033932919970212194",
            "extra": "mean: 32.96570775862345 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1970303.7836409584,
            "unit": "iter/sec",
            "range": "stddev: 1.1577967159433084e-7",
            "extra": "mean: 507.53594867086065 nsec\nrounds: 136987"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6171795.023549147,
            "unit": "iter/sec",
            "range": "stddev: 7.833717186857291e-9",
            "extra": "mean: 162.02741604076635 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.841780675506671,
            "unit": "iter/sec",
            "range": "stddev: 0.002346374598777152",
            "extra": "mean: 1.187957895799991 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 497352.33718240785,
            "unit": "iter/sec",
            "range": "stddev: 3.4527886188638713e-7",
            "extra": "mean: 2.010647030765319 usec\nrounds: 2139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.44200018992382,
            "unit": "iter/sec",
            "range": "stddev: 0.00023629296587321686",
            "extra": "mean: 10.056113091954149 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 149699.40151374476,
            "unit": "iter/sec",
            "range": "stddev: 4.4435452680207825e-7",
            "extra": "mean: 6.680053426320374 usec\nrounds: 39999"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 318.04817640000516,
            "unit": "iter/sec",
            "range": "stddev: 0.0002257315873351002",
            "extra": "mean: 3.1441777510533897 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 106.76014848058824,
            "unit": "iter/sec",
            "range": "stddev: 0.0007633973853045768",
            "extra": "mean: 9.366791019233416 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11984.995973016767,
            "unit": "iter/sec",
            "range": "stddev: 0.000031444174052988553",
            "extra": "mean: 83.43765840651243 usec\nrounds: 5811"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 96.57255682748014,
            "unit": "iter/sec",
            "range": "stddev: 0.0004494243964628777",
            "extra": "mean: 10.354908608109314 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 140.7722261927784,
            "unit": "iter/sec",
            "range": "stddev: 0.0006937781350246737",
            "extra": "mean: 7.103673977781421 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5322.356956265907,
            "unit": "iter/sec",
            "range": "stddev: 0.00005168158373192536",
            "extra": "mean: 187.88668407945084 usec\nrounds: 2412"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.08982628111546,
            "unit": "iter/sec",
            "range": "stddev: 0.00007440422143033361",
            "extra": "mean: 13.142361454545567 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.40939492584805,
            "unit": "iter/sec",
            "range": "stddev: 0.0007612250798927291",
            "extra": "mean: 9.764729112246721 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1952056.224568913,
            "unit": "iter/sec",
            "range": "stddev: 9.218993707675307e-8",
            "extra": "mean: 512.2803264648985 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 54.83811633961639,
            "unit": "iter/sec",
            "range": "stddev: 0.0004685349136487621",
            "extra": "mean: 18.235491419999335 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 143.44439977956708,
            "unit": "iter/sec",
            "range": "stddev: 0.011511442144369785",
            "extra": "mean: 6.971342217170648 msec\nrounds: 198"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 746.9512798783358,
            "unit": "iter/sec",
            "range": "stddev: 0.000021137615831882025",
            "extra": "mean: 1.3387754020086573 msec\nrounds: 597"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 289.96760332554936,
            "unit": "iter/sec",
            "range": "stddev: 0.00014689938153370345",
            "extra": "mean: 3.4486611212125324 msec\nrounds: 264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 139.2916036081087,
            "unit": "iter/sec",
            "range": "stddev: 0.0006284761621056921",
            "extra": "mean: 7.179183626986301 msec\nrounds: 126"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16726054767640666,
            "unit": "iter/sec",
            "range": "stddev: 0.09465909159713558",
            "extra": "mean: 5.978696195199996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 276.0683792702055,
            "unit": "iter/sec",
            "range": "stddev: 0.00816727142021102",
            "extra": "mean: 3.6222909796606473 msec\nrounds: 295"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.3791040269375,
            "unit": "iter/sec",
            "range": "stddev: 0.0007795259532774196",
            "extra": "mean: 9.767618202019865 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.063670694517157,
            "unit": "iter/sec",
            "range": "stddev: 0.006929070163076705",
            "extra": "mean: 99.36732136364671 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 47.683629620578685,
            "unit": "iter/sec",
            "range": "stddev: 0.00027371284915213843",
            "extra": "mean: 20.971557911112388 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5462.442164482126,
            "unit": "iter/sec",
            "range": "stddev: 0.00005079122231340955",
            "extra": "mean: 183.06829983522698 usec\nrounds: 2428"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.87722480563391,
            "unit": "iter/sec",
            "range": "stddev: 0.0007138216970723325",
            "extra": "mean: 24.46350026830038 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.508407399404076,
            "unit": "iter/sec",
            "range": "stddev: 0.00019625347306404596",
            "extra": "mean: 64.48115362499607 msec\nrounds: 16"
          }
        ]
      }
    ]
  }
}