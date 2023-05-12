window.BENCHMARK_DATA = {
  "lastUpdate": 1683930711565,
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
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "030f76d7950c5d57977950233e4ba491b3a60b19",
          "message": "fix(trino): ensure that nested array types are inferred correctly",
          "timestamp": "2023-05-12T18:19:44-04:00",
          "tree_id": "fb23b00355d286b358f6188aeea372f4c561943d",
          "url": "https://github.com/ibis-project/ibis/commit/030f76d7950c5d57977950233e4ba491b3a60b19"
        },
        "date": 1683930629782,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 50.45546384650589,
            "unit": "iter/sec",
            "range": "stddev: 0.0006475418229158141",
            "extra": "mean: 19.819459058828002 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8154.783787409625,
            "unit": "iter/sec",
            "range": "stddev: 0.00006253929415333727",
            "extra": "mean: 122.62740816548995 usec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 107.02531506163574,
            "unit": "iter/sec",
            "range": "stddev: 0.0000688613296899464",
            "extra": "mean: 9.343583800001909 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1869060.7629566304,
            "unit": "iter/sec",
            "range": "stddev: 9.935817164325754e-8",
            "extra": "mean: 535.0280845969501 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 313.0403752267389,
            "unit": "iter/sec",
            "range": "stddev: 0.00035059671783491694",
            "extra": "mean: 3.194476109593493 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 205.5634886459594,
            "unit": "iter/sec",
            "range": "stddev: 0.00003163421462541528",
            "extra": "mean: 4.864677120372739 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.11447556070001,
            "unit": "iter/sec",
            "range": "stddev: 0.0005492502968497125",
            "extra": "mean: 20.78376597368136 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 82.95476166023214,
            "unit": "iter/sec",
            "range": "stddev: 0.01631291124913952",
            "extra": "mean: 12.054763102036517 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 101.1864932973557,
            "unit": "iter/sec",
            "range": "stddev: 0.0007972953719667096",
            "extra": "mean: 9.882741929412559 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2169.4111428828373,
            "unit": "iter/sec",
            "range": "stddev: 0.00008676767158701955",
            "extra": "mean: 460.95457897904174 usec\nrounds: 1608"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 37.545459962006774,
            "unit": "iter/sec",
            "range": "stddev: 0.0016267923961713836",
            "extra": "mean: 26.634378724136713 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5578790.720419756,
            "unit": "iter/sec",
            "range": "stddev: 9.845977199531697e-9",
            "extra": "mean: 179.25031608380274 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 80.27942863539661,
            "unit": "iter/sec",
            "range": "stddev: 0.019489522383435046",
            "extra": "mean: 12.45649124561759 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 95.79284091025181,
            "unit": "iter/sec",
            "range": "stddev: 0.0008415887480050033",
            "extra": "mean: 10.4391934772756 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2230.9354657624003,
            "unit": "iter/sec",
            "range": "stddev: 0.00008698975282148135",
            "extra": "mean: 448.2424594286773 usec\nrounds: 1787"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 236.4607253944588,
            "unit": "iter/sec",
            "range": "stddev: 0.00032610237440118095",
            "extra": "mean: 4.229032108109375 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 103.99743264653469,
            "unit": "iter/sec",
            "range": "stddev: 0.0007896071396290179",
            "extra": "mean: 9.615621987504142 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 227.84093271273005,
            "unit": "iter/sec",
            "range": "stddev: 0.010856260046884775",
            "extra": "mean: 4.3890269763810865 msec\nrounds: 254"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 127.27619074926561,
            "unit": "iter/sec",
            "range": "stddev: 0.00010731066042626054",
            "extra": "mean: 7.856929046297452 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 83.77383984154343,
            "unit": "iter/sec",
            "range": "stddev: 0.0006608829598721699",
            "extra": "mean: 11.93690061111536 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1769109.268983828,
            "unit": "iter/sec",
            "range": "stddev: 9.44914267731504e-8",
            "extra": "mean: 565.2562097390387 nsec\nrounds: 101011"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11318816.908386374,
            "unit": "iter/sec",
            "range": "stddev: 4.0902013032159874e-9",
            "extra": "mean: 88.3484562118804 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9111105124345618,
            "unit": "iter/sec",
            "range": "stddev: 0.003523676742530406",
            "extra": "mean: 1.0975616968000055 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 98.0087106598738,
            "unit": "iter/sec",
            "range": "stddev: 0.0007562789364691931",
            "extra": "mean: 10.203174730768238 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 105.48968247314986,
            "unit": "iter/sec",
            "range": "stddev: 0.0008388304449517464",
            "extra": "mean: 9.47960005713856 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6165891.965693643,
            "unit": "iter/sec",
            "range": "stddev: 1.1039908536558287e-8",
            "extra": "mean: 162.1825366974898 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 746.5895670495669,
            "unit": "iter/sec",
            "range": "stddev: 0.00016200393831910856",
            "extra": "mean: 1.3394240210881607 msec\nrounds: 569"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12453.832684141154,
            "unit": "iter/sec",
            "range": "stddev: 0.000021311851824399913",
            "extra": "mean: 80.29656615456307 usec\nrounds: 4036"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2182.048136058534,
            "unit": "iter/sec",
            "range": "stddev: 0.00008317835368963924",
            "extra": "mean: 458.2850320645606 usec\nrounds: 998"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2746310.707612683,
            "unit": "iter/sec",
            "range": "stddev: 1.2791439881862346e-8",
            "extra": "mean: 364.1248592984199 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 30.158799882046857,
            "unit": "iter/sec",
            "range": "stddev: 0.00020334020006040755",
            "extra": "mean: 33.15781807999883 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4452771535837177,
            "unit": "iter/sec",
            "range": "stddev: 0.0013764721668100886",
            "extra": "mean: 408.9515981999966 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 112.0386773614831,
            "unit": "iter/sec",
            "range": "stddev: 0.00006134411413539349",
            "extra": "mean: 8.925489157405764 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2151.21689297419,
            "unit": "iter/sec",
            "range": "stddev: 0.00009017882345213935",
            "extra": "mean: 464.8531736925133 usec\nrounds: 1186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4500842.218748841,
            "unit": "iter/sec",
            "range": "stddev: 1.3742155886095e-8",
            "extra": "mean: 222.1806389554395 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 282.5179485792685,
            "unit": "iter/sec",
            "range": "stddev: 0.0002782721726778688",
            "extra": "mean: 3.5395981212125416 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2184.770151269939,
            "unit": "iter/sec",
            "range": "stddev: 0.00009711699266880564",
            "extra": "mean: 457.7140526287084 usec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3559658438452418,
            "unit": "iter/sec",
            "range": "stddev: 0.0005096565483008641",
            "extra": "mean: 737.4817031999896 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.165366128266346,
            "unit": "iter/sec",
            "range": "stddev: 0.0009451637167076347",
            "extra": "mean: 43.16789099999596 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 81.85456282694742,
            "unit": "iter/sec",
            "range": "stddev: 0.021478732989605526",
            "extra": "mean: 12.21678994381959 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 162.29975080425643,
            "unit": "iter/sec",
            "range": "stddev: 0.003759918977595667",
            "extra": "mean: 6.161438911918368 msec\nrounds: 193"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 164.43877623285846,
            "unit": "iter/sec",
            "range": "stddev: 0.00012177399014078653",
            "extra": "mean: 6.081290696203674 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1154.0796122250345,
            "unit": "iter/sec",
            "range": "stddev: 0.000010625255301879835",
            "extra": "mean: 866.4913489564441 usec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 280.85610397800593,
            "unit": "iter/sec",
            "range": "stddev: 0.00031739673367764957",
            "extra": "mean: 3.5605421631794436 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 538.4637334519969,
            "unit": "iter/sec",
            "range": "stddev: 0.000029186013197010126",
            "extra": "mean: 1.857135286696422 msec\nrounds: 436"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 677.2414271090519,
            "unit": "iter/sec",
            "range": "stddev: 0.00010186504001808643",
            "extra": "mean: 1.4765783071905558 msec\nrounds: 612"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 94.92055687271812,
            "unit": "iter/sec",
            "range": "stddev: 0.00027288411907856654",
            "extra": "mean: 10.535125719299462 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.589799338030435,
            "unit": "iter/sec",
            "range": "stddev: 0.00030705056748798825",
            "extra": "mean: 116.41715488889304 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 52.65181886079715,
            "unit": "iter/sec",
            "range": "stddev: 0.0003751859406545144",
            "extra": "mean: 18.992696199989545 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.613387214907624,
            "unit": "iter/sec",
            "range": "stddev: 0.0024420395128104616",
            "extra": "mean: 619.8140104000117 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2122.3129608569943,
            "unit": "iter/sec",
            "range": "stddev: 0.000089138570777508",
            "extra": "mean: 471.1840423366202 usec\nrounds: 1181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 184.83092701264212,
            "unit": "iter/sec",
            "range": "stddev: 0.0210011760230719",
            "extra": "mean: 5.410349967738904 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 275.3357069868151,
            "unit": "iter/sec",
            "range": "stddev: 0.0003186969615056783",
            "extra": "mean: 3.631929948148304 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 99.70879531704382,
            "unit": "iter/sec",
            "range": "stddev: 0.0008840381342710556",
            "extra": "mean: 10.02920551612626 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.16587141803685843,
            "unit": "iter/sec",
            "range": "stddev: 0.10550533013434622",
            "extra": "mean: 6.028766208399986 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10529.044088144776,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026551320716439337",
            "extra": "mean: 94.97538348480794 usec\nrounds: 3403"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1854149.7472279978,
            "unit": "iter/sec",
            "range": "stddev: 9.545255128848358e-8",
            "extra": "mean: 539.3307641386712 nsec\nrounds: 109891"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 95.5344818439383,
            "unit": "iter/sec",
            "range": "stddev: 0.0008879231571225636",
            "extra": "mean: 10.467424752808771 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 2086.049754341417,
            "unit": "iter/sec",
            "range": "stddev: 0.00010548691311358569",
            "extra": "mean: 479.374951589162 usec\nrounds: 1384"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.2607719089657,
            "unit": "iter/sec",
            "range": "stddev: 0.0006558677416949839",
            "extra": "mean: 9.778920903220026 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7675085477085434,
            "unit": "iter/sec",
            "range": "stddev: 0.004004708369709351",
            "extra": "mean: 1.3029170853999972 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1545.207129584521,
            "unit": "iter/sec",
            "range": "stddev: 0.0066594648796018336",
            "extra": "mean: 647.1624294594619 usec\nrounds: 1127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 36.516189384090445,
            "unit": "iter/sec",
            "range": "stddev: 0.0007411671065776874",
            "extra": "mean: 27.385113750003853 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13979.759805880141,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012406762225704712",
            "extra": "mean: 71.53198723624577 usec\nrounds: 6346"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6268189.071094837,
            "unit": "iter/sec",
            "range": "stddev: 4.484237130663267e-9",
            "extra": "mean: 159.5357109777447 nsec\nrounds: 59172"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.41091013815569,
            "unit": "iter/sec",
            "range": "stddev: 0.0008052281343988862",
            "extra": "mean: 9.670159547614585 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7108338.56729552,
            "unit": "iter/sec",
            "range": "stddev: 3.312294363974612e-9",
            "extra": "mean: 140.67984952220482 nsec\nrounds: 60607"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 104.56601334007054,
            "unit": "iter/sec",
            "range": "stddev: 0.0004823024873918789",
            "extra": "mean: 9.563336767442697 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 19.045679863272266,
            "unit": "iter/sec",
            "range": "stddev: 0.00019763709160672816",
            "extra": "mean: 52.50534542105805 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 33.866756683854504,
            "unit": "iter/sec",
            "range": "stddev: 0.04203882102962913",
            "extra": "mean: 29.527480571434104 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 150522.9438937503,
            "unit": "iter/sec",
            "range": "stddev: 3.1420829391212267e-7",
            "extra": "mean: 6.6435054625683545 usec\nrounds: 34966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 110.43225721820636,
            "unit": "iter/sec",
            "range": "stddev: 0.00004999574783431554",
            "extra": "mean: 9.05532518477885 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.3196301105916,
            "unit": "iter/sec",
            "range": "stddev: 0.000921776278189827",
            "extra": "mean: 10.068503063155875 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9184895683586962,
            "unit": "iter/sec",
            "range": "stddev: 0.006541070466285283",
            "extra": "mean: 1.088743992800005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.4847731455863,
            "unit": "iter/sec",
            "range": "stddev: 0.0008223187554070105",
            "extra": "mean: 9.951756556699 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 189.08915979716824,
            "unit": "iter/sec",
            "range": "stddev: 0.00017332350948386636",
            "extra": "mean: 5.288510462856136 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2140.8989194120354,
            "unit": "iter/sec",
            "range": "stddev: 0.00008568139752412357",
            "extra": "mean: 467.0935142863421 usec\nrounds: 1330"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 75.51047969568063,
            "unit": "iter/sec",
            "range": "stddev: 0.027074216699055954",
            "extra": "mean: 13.24319490526561 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 427.9357068043761,
            "unit": "iter/sec",
            "range": "stddev: 0.000028264553084922515",
            "extra": "mean: 2.3367996269054823 msec\nrounds: 394"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1039034.7147663451,
            "unit": "iter/sec",
            "range": "stddev: 1.0895075960439433e-7",
            "extra": "mean: 962.4317511132214 nsec\nrounds: 102031"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 176.26294058515515,
            "unit": "iter/sec",
            "range": "stddev: 0.0001928388640875059",
            "extra": "mean: 5.6733423184715654 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 272.8921280292532,
            "unit": "iter/sec",
            "range": "stddev: 0.0003484082889313238",
            "extra": "mean: 3.66445161764726 msec\nrounds: 238"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 103.55637539852654,
            "unit": "iter/sec",
            "range": "stddev: 0.0006600885764130489",
            "extra": "mean: 9.656575909996832 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4396.375113467486,
            "unit": "iter/sec",
            "range": "stddev: 0.000051993141774852175",
            "extra": "mean: 227.4601175265241 usec\nrounds: 1940"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1779.3839391439546,
            "unit": "iter/sec",
            "range": "stddev: 0.000005291626819725854",
            "extra": "mean: 561.9922592316366 usec\nrounds: 1300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 163.66680207086068,
            "unit": "iter/sec",
            "range": "stddev: 0.000053916665784455816",
            "extra": "mean: 6.1099745785161925 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.64214255537307,
            "unit": "iter/sec",
            "range": "stddev: 0.0007022318769682355",
            "extra": "mean: 9.465919336838923 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 243.9623356236174,
            "unit": "iter/sec",
            "range": "stddev: 0.0035092478782395515",
            "extra": "mean: 4.098993385367443 msec\nrounds: 205"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 281.7786304335166,
            "unit": "iter/sec",
            "range": "stddev: 0.0002649865783078005",
            "extra": "mean: 3.548885160175204 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 63.27616973135439,
            "unit": "iter/sec",
            "range": "stddev: 0.0005467444568408403",
            "extra": "mean: 15.803737872339696 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 100.5708966865008,
            "unit": "iter/sec",
            "range": "stddev: 0.0007569804036967353",
            "extra": "mean: 9.9432344042551 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 193.5847725853544,
            "unit": "iter/sec",
            "range": "stddev: 0.020614153424496864",
            "extra": "mean: 5.165695558823384 msec\nrounds: 238"
          }
        ]
      }
    ]
  }
}