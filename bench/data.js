window.BENCHMARK_DATA = {
  "lastUpdate": 1676914527800,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "szucs.krisztian@gmail.com",
            "name": "Krisztián Szűcs",
            "username": "kszucs"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "62f6e14e12a1f48809e9284744f4adb0e55c23af",
          "message": "fix(analysis): extract `Limit` subqueries",
          "timestamp": "2023-02-20T12:30:26-05:00",
          "tree_id": "46fdb3709d820ae98e64202dcd35026d54fbdbe6",
          "url": "https://github.com/ibis-project/ibis/commit/62f6e14e12a1f48809e9284744f4adb0e55c23af"
        },
        "date": 1676914451857,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.1812451187550908,
            "unit": "iter/sec",
            "range": "stddev: 0.0037500696347243204",
            "extra": "mean: 458.4537480000108 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 101.10813151066539,
            "unit": "iter/sec",
            "range": "stddev: 0.006805870699740326",
            "extra": "mean: 9.890401346152016 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 123553.97911337184,
            "unit": "iter/sec",
            "range": "stddev: 3.0487265984276905e-7",
            "extra": "mean: 8.093628446255142 usec\nrounds: 34964"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1623435.7309299475,
            "unit": "iter/sec",
            "range": "stddev: 9.022671115737343e-8",
            "extra": "mean: 615.9775721008513 nsec\nrounds: 119048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 80.0760138841589,
            "unit": "iter/sec",
            "range": "stddev: 0.01013797115133666",
            "extra": "mean: 12.488134105259524 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.108460282081616,
            "unit": "iter/sec",
            "range": "stddev: 0.0005995514998390851",
            "extra": "mean: 38.30176077776236 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1431968.2007075949,
            "unit": "iter/sec",
            "range": "stddev: 9.878878700866658e-8",
            "extra": "mean: 698.3395298204657 nsec\nrounds: 131579"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 930.9261086367735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000514689916527183",
            "extra": "mean: 1.074199112821507 msec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3988.151690482015,
            "unit": "iter/sec",
            "range": "stddev: 0.00004705665382916348",
            "extra": "mean: 250.74271933702155 usec\nrounds: 905"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5514328965814836,
            "unit": "iter/sec",
            "range": "stddev: 0.001811846862259195",
            "extra": "mean: 644.5654221999916 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 63.15543308124548,
            "unit": "iter/sec",
            "range": "stddev: 0.013847117084755776",
            "extra": "mean: 15.833950480769614 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 116.04881482511547,
            "unit": "iter/sec",
            "range": "stddev: 0.0003306332124117091",
            "extra": "mean: 8.617063444439232 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3660.953705875719,
            "unit": "iter/sec",
            "range": "stddev: 0.00005123993783792661",
            "extra": "mean: 273.15286680490675 usec\nrounds: 1922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 264.77083219560257,
            "unit": "iter/sec",
            "range": "stddev: 0.000017573029545758194",
            "extra": "mean: 3.7768510666659774 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4020.5853972486366,
            "unit": "iter/sec",
            "range": "stddev: 0.000027657932525135578",
            "extra": "mean: 248.71999999908445 usec\nrounds: 1920"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.30998443381009,
            "unit": "iter/sec",
            "range": "stddev: 0.00047442757930173324",
            "extra": "mean: 22.070190764704943 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 69.62813809404905,
            "unit": "iter/sec",
            "range": "stddev: 0.00006916019171379676",
            "extra": "mean: 14.362009776123362 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 83.09850545565938,
            "unit": "iter/sec",
            "range": "stddev: 0.0005231546058890899",
            "extra": "mean: 12.033910772722512 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 82.38569466947321,
            "unit": "iter/sec",
            "range": "stddev: 0.00008192646312998577",
            "extra": "mean: 12.13802959375343 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4183734.9919454153,
            "unit": "iter/sec",
            "range": "stddev: 1.0669498371810457e-8",
            "extra": "mean: 239.02087534855414 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7267987387358471,
            "unit": "iter/sec",
            "range": "stddev: 0.004507960772335401",
            "extra": "mean: 1.3758967190000135 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3441.62596009089,
            "unit": "iter/sec",
            "range": "stddev: 0.000048284205517463264",
            "extra": "mean: 290.5603373510092 usec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.050571343512742,
            "unit": "iter/sec",
            "range": "stddev: 0.000779912146419849",
            "extra": "mean: 110.49026211110737 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 65.92690647488658,
            "unit": "iter/sec",
            "range": "stddev: 0.00006692197772377802",
            "extra": "mean: 15.168313719997286 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6365.550245109302,
            "unit": "iter/sec",
            "range": "stddev: 0.000013994943954321467",
            "extra": "mean: 157.09561019776842 usec\nrounds: 3040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.89190695733552,
            "unit": "iter/sec",
            "range": "stddev: 0.0002609328445216173",
            "extra": "mean: 16.980261833335675 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 65.4613565587257,
            "unit": "iter/sec",
            "range": "stddev: 0.00048748296938756546",
            "extra": "mean: 15.276188160000856 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 81.23471519330793,
            "unit": "iter/sec",
            "range": "stddev: 0.000426370231967288",
            "extra": "mean: 12.310008075000667 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3982.0913562717487,
            "unit": "iter/sec",
            "range": "stddev: 0.00006241456172485377",
            "extra": "mean: 251.1243240125597 usec\nrounds: 2432"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 258.0116436540514,
            "unit": "iter/sec",
            "range": "stddev: 0.00019605323754038505",
            "extra": "mean: 3.8757940759480816 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 31.37671120186051,
            "unit": "iter/sec",
            "range": "stddev: 0.022057626086421107",
            "extra": "mean: 31.870771718761404 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 72.7231415720058,
            "unit": "iter/sec",
            "range": "stddev: 0.0004938369099287079",
            "extra": "mean: 13.750781090911259 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8660235254729619,
            "unit": "iter/sec",
            "range": "stddev: 0.002899829988565039",
            "extra": "mean: 1.1547030427999858 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3423.0576064903917,
            "unit": "iter/sec",
            "range": "stddev: 0.00006312143779451633",
            "extra": "mean: 292.1364800007806 usec\nrounds: 1650"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1452998.3932835574,
            "unit": "iter/sec",
            "range": "stddev: 9.748267994381741e-8",
            "extra": "mean: 688.2320067403177 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8987.101835109803,
            "unit": "iter/sec",
            "range": "stddev: 0.00004549577194040838",
            "extra": "mean: 111.27057624887614 usec\nrounds: 3141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 84.97567178643409,
            "unit": "iter/sec",
            "range": "stddev: 0.0005774015320855337",
            "extra": "mean: 11.76807407316837 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 259.5748298490466,
            "unit": "iter/sec",
            "range": "stddev: 0.00021758775810439254",
            "extra": "mean: 3.852453647302941 msec\nrounds: 241"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 64.71264303278268,
            "unit": "iter/sec",
            "range": "stddev: 0.0004059841223659803",
            "extra": "mean: 15.452930882353412 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4432722.35695296,
            "unit": "iter/sec",
            "range": "stddev: 7.914116436879665e-9",
            "extra": "mean: 225.59499997395346 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1334942771701152,
            "unit": "iter/sec",
            "range": "stddev: 0.07537870549009222",
            "extra": "mean: 7.4909578238 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 421.08681413420595,
            "unit": "iter/sec",
            "range": "stddev: 0.00009291588973979145",
            "extra": "mean: 2.374807204676057 msec\nrounds: 342"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 86.31839287586494,
            "unit": "iter/sec",
            "range": "stddev: 0.00047880402539330263",
            "extra": "mean: 11.585016433729331 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.20660968614401,
            "unit": "iter/sec",
            "range": "stddev: 0.0022454457202811845",
            "extra": "mean: 33.10533722222746 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 215.88100698261377,
            "unit": "iter/sec",
            "range": "stddev: 0.00028540859560545305",
            "extra": "mean: 4.632181468750218 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.8617809152919,
            "unit": "iter/sec",
            "range": "stddev: 0.0001473972583695015",
            "extra": "mean: 205.68594459998621 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 98.81013533149351,
            "unit": "iter/sec",
            "range": "stddev: 0.00020761587828781037",
            "extra": "mean: 10.120419293477807 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1340.8022657483389,
            "unit": "iter/sec",
            "range": "stddev: 0.00003753684569496178",
            "extra": "mean: 745.822128695369 usec\nrounds: 1150"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 254.87386156570273,
            "unit": "iter/sec",
            "range": "stddev: 0.0002137002032290384",
            "extra": "mean: 3.9235094326932956 msec\nrounds: 208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 170.89399894321076,
            "unit": "iter/sec",
            "range": "stddev: 0.000042228663891921685",
            "extra": "mean: 5.851580548081778 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 272.5719452423925,
            "unit": "iter/sec",
            "range": "stddev: 0.000029892992516467804",
            "extra": "mean: 3.6687561484389786 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 69.9633803271696,
            "unit": "iter/sec",
            "range": "stddev: 0.0005698779798757572",
            "extra": "mean: 14.293191600001347 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 89.22634530634166,
            "unit": "iter/sec",
            "range": "stddev: 0.00029913295170866323",
            "extra": "mean: 11.207452199982981 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 227.16298724878632,
            "unit": "iter/sec",
            "range": "stddev: 0.00008352645188140652",
            "extra": "mean: 4.40212559321916 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.572164144737587,
            "unit": "iter/sec",
            "range": "stddev: 0.06897745227706956",
            "extra": "mean: 1.747750202799989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 67.08655065338124,
            "unit": "iter/sec",
            "range": "stddev: 0.0008682186675908982",
            "extra": "mean: 14.90611739999482 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 237.83753748642178,
            "unit": "iter/sec",
            "range": "stddev: 0.000349060328880244",
            "extra": "mean: 4.204550764225307 msec\nrounds: 246"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 152.3680098782108,
            "unit": "iter/sec",
            "range": "stddev: 0.00004655242977075284",
            "extra": "mean: 6.56305743442675 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 57482.919644062385,
            "unit": "iter/sec",
            "range": "stddev: 8.031298296804169e-7",
            "extra": "mean: 17.396471964055735 usec\nrounds: 11628"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9580421.745498551,
            "unit": "iter/sec",
            "range": "stddev: 5.02133117801749e-9",
            "extra": "mean: 104.37953845504559 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 68.80860199268263,
            "unit": "iter/sec",
            "range": "stddev: 0.000640682917640836",
            "extra": "mean: 14.533066666669729 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1451090.9022123932,
            "unit": "iter/sec",
            "range": "stddev: 9.646098713417053e-8",
            "extra": "mean: 689.1367029283683 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 255.93500873087748,
            "unit": "iter/sec",
            "range": "stddev: 0.00019693738884762348",
            "extra": "mean: 3.907241939892353 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10519.253371841052,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016604938333324939",
            "extra": "mean: 95.06378111177511 usec\nrounds: 4765"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.79542457129153,
            "unit": "iter/sec",
            "range": "stddev: 0.0006366633896970054",
            "extra": "mean: 11.793089132530406 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.87276453671106,
            "unit": "iter/sec",
            "range": "stddev: 0.0000752023534518194",
            "extra": "mean: 10.012739755816229 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10722.516793866656,
            "unit": "iter/sec",
            "range": "stddev: 0.000001520131168016551",
            "extra": "mean: 93.26168652605944 usec\nrounds: 5388"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 77.57692991647612,
            "unit": "iter/sec",
            "range": "stddev: 0.00035434438293435527",
            "extra": "mean: 12.890430197181802 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8608727435071649,
            "unit": "iter/sec",
            "range": "stddev: 0.003610408318821131",
            "extra": "mean: 1.1616118729999925 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 613.3600511197017,
            "unit": "iter/sec",
            "range": "stddev: 0.000020421090879750855",
            "extra": "mean: 1.6303637613412858 msec\nrounds: 507"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 274.178722275454,
            "unit": "iter/sec",
            "range": "stddev: 0.00005603147395064565",
            "extra": "mean: 3.647256036868349 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 71.2984445774604,
            "unit": "iter/sec",
            "range": "stddev: 0.0007362050747570646",
            "extra": "mean: 14.02555141176432 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3780.884209277674,
            "unit": "iter/sec",
            "range": "stddev: 0.00006657914366219537",
            "extra": "mean: 264.4883960069877 usec\nrounds: 2755"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 399664.04817328695,
            "unit": "iter/sec",
            "range": "stddev: 1.691352261934095e-7",
            "extra": "mean: 2.502101463893541 usec\nrounds: 1981"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 591418.4893959493,
            "unit": "iter/sec",
            "range": "stddev: 1.683676817007886e-7",
            "extra": "mean: 1.6908500798163397 usec\nrounds: 25707"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5558998.390257376,
            "unit": "iter/sec",
            "range": "stddev: 4.3735896765706864e-9",
            "extra": "mean: 179.8885212401985 nsec\nrounds: 55249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 85.33622864866767,
            "unit": "iter/sec",
            "range": "stddev: 0.0006381658382478057",
            "extra": "mean: 11.718352402436672 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.458800579148296,
            "unit": "iter/sec",
            "range": "stddev: 0.0003080303953911155",
            "extra": "mean: 74.30082600000024 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.54095623265902,
            "unit": "iter/sec",
            "range": "stddev: 0.0004049152588302607",
            "extra": "mean: 24.072628333331707 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 526.4672084303975,
            "unit": "iter/sec",
            "range": "stddev: 0.00007781064040572719",
            "extra": "mean: 1.8994535347821324 msec\nrounds: 460"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 85.71396124049852,
            "unit": "iter/sec",
            "range": "stddev: 0.0005933809918338011",
            "extra": "mean: 11.666710831321556 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3960.6616045448854,
            "unit": "iter/sec",
            "range": "stddev: 0.00005884427047948663",
            "extra": "mean: 252.48306971049823 usec\nrounds: 2869"
          }
        ]
      }
    ]
  }
}