window.BENCHMARK_DATA = {
  "lastUpdate": 1676910496953,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "distinct": true,
          "id": "9018eb60d851dabe8974cf300411cfea5b74571a",
          "message": "fix(sqlalchemy): ensure that isin contains full column expression",
          "timestamp": "2023-02-20T17:23:02+01:00",
          "tree_id": "74569a884c6ba80b0ff425a64a6a59e118db3b8d",
          "url": "https://github.com/ibis-project/ibis/commit/9018eb60d851dabe8974cf300411cfea5b74571a"
        },
        "date": 1676910414105,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10240.403319279578,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022058037778033525",
            "extra": "mean: 97.65240379910651 usec\nrounds: 3685"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15471386658115524,
            "unit": "iter/sec",
            "range": "stddev: 0.022922578373213934",
            "extra": "mean: 6.463544749400012 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1441356.2241878642,
            "unit": "iter/sec",
            "range": "stddev: 1.0207699446013479e-7",
            "extra": "mean: 693.7910165569601 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 76.62527206643476,
            "unit": "iter/sec",
            "range": "stddev: 0.00012484874741471253",
            "extra": "mean: 13.050524624995674 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 65.84005877465844,
            "unit": "iter/sec",
            "range": "stddev: 0.008502189621331147",
            "extra": "mean: 15.18832179999353 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 9191.378830108788,
            "unit": "iter/sec",
            "range": "stddev: 0.000012435673958105377",
            "extra": "mean: 108.79760463405512 usec\nrounds: 3928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1433538.6086764175,
            "unit": "iter/sec",
            "range": "stddev: 1.0571091876140753e-7",
            "extra": "mean: 697.5745152223681 nsec\nrounds: 156250"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11829102.835183525,
            "unit": "iter/sec",
            "range": "stddev: 3.4558781292726047e-9",
            "extra": "mean: 84.5372649077876 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 262.7119949139762,
            "unit": "iter/sec",
            "range": "stddev: 0.0002640811395078342",
            "extra": "mean: 3.806449721975753 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.3429096187642,
            "unit": "iter/sec",
            "range": "stddev: 0.017758763099316444",
            "extra": "mean: 30.918677750001677 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 66.6734822737528,
            "unit": "iter/sec",
            "range": "stddev: 0.0004460892213155891",
            "extra": "mean: 14.998466645166783 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.24180257684917,
            "unit": "iter/sec",
            "range": "stddev: 0.00039581220203530195",
            "extra": "mean: 18.10223333333228 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 94.42614728002874,
            "unit": "iter/sec",
            "range": "stddev: 0.00005475713728514082",
            "extra": "mean: 10.590287000002396 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 233.47628522336964,
            "unit": "iter/sec",
            "range": "stddev: 0.00016791329799651348",
            "extra": "mean: 4.283090246374649 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 97.27668620784551,
            "unit": "iter/sec",
            "range": "stddev: 0.00012958109828264437",
            "extra": "mean: 10.279955444445932 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4473.563071967498,
            "unit": "iter/sec",
            "range": "stddev: 0.000019870932785338022",
            "extra": "mean: 223.53546466490175 usec\nrounds: 2165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 63.833769918009025,
            "unit": "iter/sec",
            "range": "stddev: 0.013905466371489358",
            "extra": "mean: 15.665689200002525 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.52248445132845,
            "unit": "iter/sec",
            "range": "stddev: 0.00035861431692746533",
            "extra": "mean: 11.425635438355311 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 67.59010286072872,
            "unit": "iter/sec",
            "range": "stddev: 0.0006002465607693668",
            "extra": "mean: 14.79506551514691 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 119127.82916922764,
            "unit": "iter/sec",
            "range": "stddev: 3.313704420822548e-7",
            "extra": "mean: 8.394344184509944 usec\nrounds: 31056"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4007.1896477117984,
            "unit": "iter/sec",
            "range": "stddev: 0.00006722167212065934",
            "extra": "mean: 249.55145324130694 usec\nrounds: 1882"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4709805.6256532585,
            "unit": "iter/sec",
            "range": "stddev: 1.120074697075447e-8",
            "extra": "mean: 212.3229872913986 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 118.68250293162261,
            "unit": "iter/sec",
            "range": "stddev: 0.0002751974985377785",
            "extra": "mean: 8.425841849460632 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5620877830957116,
            "unit": "iter/sec",
            "range": "stddev: 0.0020033618688347463",
            "extra": "mean: 640.1688885999874 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 62.90630497736339,
            "unit": "iter/sec",
            "range": "stddev: 0.00033797185093066437",
            "extra": "mean: 15.89665774137976 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 281.77363415892984,
            "unit": "iter/sec",
            "range": "stddev: 0.000042382983216588856",
            "extra": "mean: 3.54894808730034 msec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.017547343320032,
            "unit": "iter/sec",
            "range": "stddev: 0.0005182136800522833",
            "extra": "mean: 38.435598359994856 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4375926.42587923,
            "unit": "iter/sec",
            "range": "stddev: 1.2636129312405978e-8",
            "extra": "mean: 228.523037792946 nsec\nrounds: 192271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 69.4590457166466,
            "unit": "iter/sec",
            "range": "stddev: 0.000672519158722482",
            "extra": "mean: 14.396972916665618 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 98.26872260909778,
            "unit": "iter/sec",
            "range": "stddev: 0.0001275036050415207",
            "extra": "mean: 10.176177866663542 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 205.01759223278506,
            "unit": "iter/sec",
            "range": "stddev: 0.010108375521105072",
            "extra": "mean: 4.877630202897714 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 68.6761554702142,
            "unit": "iter/sec",
            "range": "stddev: 0.0005362047074358407",
            "extra": "mean: 14.561094650001394 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 68.64364181902674,
            "unit": "iter/sec",
            "range": "stddev: 0.0005773789915875747",
            "extra": "mean: 14.567991637687536 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 244.37713406465684,
            "unit": "iter/sec",
            "range": "stddev: 0.0002217779282628594",
            "extra": "mean: 4.092035876545724 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 253.2751084358952,
            "unit": "iter/sec",
            "range": "stddev: 0.00022703262444152185",
            "extra": "mean: 3.948275873517604 msec\nrounds: 253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 384095.81869198685,
            "unit": "iter/sec",
            "range": "stddev: 8.560870051315222e-8",
            "extra": "mean: 2.6035170166794175 usec\nrounds: 1998"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 262.9985405207132,
            "unit": "iter/sec",
            "range": "stddev: 0.000011726657390824361",
            "extra": "mean: 3.802302469131923 msec\nrounds: 162"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 441.12426264618637,
            "unit": "iter/sec",
            "range": "stddev: 0.00002860594735265504",
            "extra": "mean: 2.26693493121704 msec\nrounds: 378"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 4448.808885411047,
            "unit": "iter/sec",
            "range": "stddev: 0.00005266524024864446",
            "extra": "mean: 224.7792669357621 usec\nrounds: 2229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5443469.2271420285,
            "unit": "iter/sec",
            "range": "stddev: 5.4547299546906565e-9",
            "extra": "mean: 183.70637515754248 nsec\nrounds: 54052"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 4393.318153596037,
            "unit": "iter/sec",
            "range": "stddev: 0.00007365678224095166",
            "extra": "mean: 227.618388889381 usec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 43.3254740338904,
            "unit": "iter/sec",
            "range": "stddev: 0.00043800107262412875",
            "extra": "mean: 23.081109261903794 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 555.1186496253899,
            "unit": "iter/sec",
            "range": "stddev: 0.00005573975286846174",
            "extra": "mean: 1.8014166893416907 msec\nrounds: 441"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.0688708971059,
            "unit": "iter/sec",
            "range": "stddev: 0.00019957462954545304",
            "extra": "mean: 13.875616303573272 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4019.424757398905,
            "unit": "iter/sec",
            "range": "stddev: 0.00004880200752661183",
            "extra": "mean: 248.7918198143187 usec\nrounds: 1726"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 71.80431982230932,
            "unit": "iter/sec",
            "range": "stddev: 0.0005408163014541541",
            "extra": "mean: 13.926738704226313 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1586647.3684684206,
            "unit": "iter/sec",
            "range": "stddev: 9.466889604621386e-8",
            "extra": "mean: 630.259766519698 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 58.653876638815795,
            "unit": "iter/sec",
            "range": "stddev: 0.016461454172666003",
            "extra": "mean: 17.04917146666863 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1921679.3736945556,
            "unit": "iter/sec",
            "range": "stddev: 4.936211125978033e-8",
            "extra": "mean: 520.3781721805099 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.125143818310638,
            "unit": "iter/sec",
            "range": "stddev: 0.0004491418428292468",
            "extra": "mean: 109.58731390001617 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 33.613126799948304,
            "unit": "iter/sec",
            "range": "stddev: 0.0007235557938220248",
            "extra": "mean: 29.750281964293126 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.885974999805137,
            "unit": "iter/sec",
            "range": "stddev: 0.0002733338309546997",
            "extra": "mean: 204.66744099998095 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 168.26490535254555,
            "unit": "iter/sec",
            "range": "stddev: 0.00004193727237105779",
            "extra": "mean: 5.943009909908535 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 563685.0391307704,
            "unit": "iter/sec",
            "range": "stddev: 2.509634234226938e-7",
            "extra": "mean: 1.7740403427099083 usec\nrounds: 23697"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 253.95756789664696,
            "unit": "iter/sec",
            "range": "stddev: 0.00022729787658019334",
            "extra": "mean: 3.937665682823714 msec\nrounds: 227"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 141.66359403977364,
            "unit": "iter/sec",
            "range": "stddev: 0.000042101047756064",
            "extra": "mean: 7.05897663248074 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5810329448068848,
            "unit": "iter/sec",
            "range": "stddev: 0.05993860243525697",
            "extra": "mean: 1.7210728048000192 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6483.2300324325815,
            "unit": "iter/sec",
            "range": "stddev: 0.000012900930578156212",
            "extra": "mean: 154.24410286191693 usec\nrounds: 3179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7369213887581596,
            "unit": "iter/sec",
            "range": "stddev: 0.0042415340677934964",
            "extra": "mean: 1.3569968456000083 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 88.41151191269257,
            "unit": "iter/sec",
            "range": "stddev: 0.00007017354524388012",
            "extra": "mean: 11.310744249996674 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 70.85690699438129,
            "unit": "iter/sec",
            "range": "stddev: 0.0005679634854523932",
            "extra": "mean: 14.112950203701336 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 43.83809087639634,
            "unit": "iter/sec",
            "range": "stddev: 0.0006745575658239653",
            "extra": "mean: 22.8112123499983 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10865.6809809516,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017257239415615464",
            "extra": "mean: 92.03288792971921 usec\nrounds: 5559"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 69.06063531314874,
            "unit": "iter/sec",
            "range": "stddev: 0.0006262011068939665",
            "extra": "mean: 14.480028969695937 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1455.1011649057148,
            "unit": "iter/sec",
            "range": "stddev: 0.000012137400484659679",
            "extra": "mean: 687.237440336182 usec\nrounds: 1190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.869848998637462,
            "unit": "iter/sec",
            "range": "stddev: 0.00016710393942561715",
            "extra": "mean: 72.09883828571151 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 333.09711257890683,
            "unit": "iter/sec",
            "range": "stddev: 0.000028182149476852183",
            "extra": "mean: 3.0021274944648813 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4093.5057361245795,
            "unit": "iter/sec",
            "range": "stddev: 0.00004778498512199381",
            "extra": "mean: 244.28938530002503 usec\nrounds: 2136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2110890713339786,
            "unit": "iter/sec",
            "range": "stddev: 0.002237942728171761",
            "extra": "mean: 452.26581459999124 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 62.83220299768437,
            "unit": "iter/sec",
            "range": "stddev: 0.0006742690112090642",
            "extra": "mean: 15.915405672420148 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8529521043022775,
            "unit": "iter/sec",
            "range": "stddev: 0.003614253583367597",
            "extra": "mean: 1.1723987724000153 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 612.2931297103644,
            "unit": "iter/sec",
            "range": "stddev: 0.00007321934442722652",
            "extra": "mean: 1.6332046718751103 msec\nrounds: 512"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 258.5102085405672,
            "unit": "iter/sec",
            "range": "stddev: 0.00020357259804277978",
            "extra": "mean: 3.868319188033432 msec\nrounds: 234"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 4503.664690835035,
            "unit": "iter/sec",
            "range": "stddev: 0.000053322079749048404",
            "extra": "mean: 222.04139709490403 usec\nrounds: 2410"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 68.75661327762772,
            "unit": "iter/sec",
            "range": "stddev: 0.00047607379725176296",
            "extra": "mean: 14.544055507245055 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 66.78720602492646,
            "unit": "iter/sec",
            "range": "stddev: 0.0006122972351267597",
            "extra": "mean: 14.972927593748686 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8498124766482269,
            "unit": "iter/sec",
            "range": "stddev: 0.006858151319335593",
            "extra": "mean: 1.1767301933999987 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 71.06926018809297,
            "unit": "iter/sec",
            "range": "stddev: 0.0005830108996266215",
            "extra": "mean: 14.070781057146014 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57791.61602882919,
            "unit": "iter/sec",
            "range": "stddev: 5.474580149168877e-7",
            "extra": "mean: 17.30354796621629 usec\nrounds: 13718"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 68.5518823125843,
            "unit": "iter/sec",
            "range": "stddev: 0.00008749940374897221",
            "extra": "mean: 14.587491492066976 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 4439.545480369604,
            "unit": "iter/sec",
            "range": "stddev: 0.00004461862121954075",
            "extra": "mean: 225.24828373123174 usec\nrounds: 1801"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 997.5713333842539,
            "unit": "iter/sec",
            "range": "stddev: 0.000011543021205544534",
            "extra": "mean: 1.002434579397452 msec\nrounds: 233"
          }
        ]
      }
    ]
  }
}